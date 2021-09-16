import React from 'react';
import Chart from 'react-google-charts';
import { connect } from 'react-redux';

const CovidChart = ({ data }) => {
  const newData = data
    ?.filter(el => el.population)
    .map(el => [
      el.country.split('-').join(' '),
      el.cases.total,
      el.cases.new === null ? 0 : Number(el.cases.new),
    ]);
  newData.unshift(['Country', 'Total', 'New confirmed case']);

  return (
    <div className="chart">
      <div className="chart__container">
        {newData.length > 3 && (
          <Chart
            chartType="GeoChart"
            width={'100%'}
            height={'100%'}
            data={newData}
            mapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
            rootProps={{ 'data-testid': '1' }}
            options={{
              colorAxis: { colors: ['white', 'orange'] },
              backgroundColor: 'transparent',
            }}
          ></Chart>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { data: state.covidData };
};

export default connect(mapStateToProps)(CovidChart);

// react-google-chart data格式
// const data = [
//   ['Country', 'New confirmed case', 'Total'],
//   ['Germany', 200],
//   ['United States', 300],
//   ['Brazil', 400],
//   ['Canada', 500],
//   ['France', 600],
//   ['RU', 700],
//   ['Zimbabw', 1000],
// ];
