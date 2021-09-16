import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getCovidData } from '../actions';

import List from './List.js';
import Map from './Map.js';
import CovidChart from './CovidChart.js';
import ContentNav from './ContentNav.js';

const Content = ({ getCovidData, tab }) => {
  useEffect(() => {
    const fetchData = async () => {
      await getCovidData();
    };

    fetchData();
  }, []);

  const renderContent = () => {
    if (tab === 'map') {
      return (
        <>
          <List />
          <Map />
        </>
      );
    } else if (tab === 'covid-chart') {
      return <CovidChart />;
    }
  };

  return (
    <div className="content">
      <div className="content__container">
        {renderContent()}
        <ContentNav />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { tab: state.contentTab };
};

export default connect(mapStateToProps, { getCovidData })(Content);
