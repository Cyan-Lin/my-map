import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getCovidData } from '../actions';

import List from './List.js';
import Map from './Map.js';
import CovidChart from './CovidChart.js';
import ContentNav from './ContentNav.js';

const Content = ({ getCovidData, tab, coords }) => {
  useEffect(() => {
    const fetchData = async () => {
      await getCovidData();
    };

    fetchData();
  }, [getCovidData]);

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

  const renderReminder = () => {
    if (coords.lat === 0 && coords.lng === 0) {
      return (
        <p className="reminder">
          Please turn on location service and refresh to get position.
        </p>
      );
    } else {
      return '';
    }
  };

  return (
    <div className="content">
      <div className="content__container">
        {renderReminder()}
        {renderContent()}
        <ContentNav />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { tab: state.contentTab, coords: state.coordinate };
};

export default connect(mapStateToProps, { getCovidData })(Content);
