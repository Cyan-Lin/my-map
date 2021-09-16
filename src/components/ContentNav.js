import React, { useRef } from 'react';
import { connect } from 'react-redux';

import { toggleContentTab } from '../actions';

const ContentNav = ({ toggleContentTab }) => {
  const markerRef = useRef(null);
  const navListRef = useRef(null);

  const onClick = (e, tab) => {
    e.preventDefault();

    toggleContentTab(tab);

    // 取得所有的.nav__tem
    const allNavItems = [...navListRef.current.querySelectorAll('.nav__item')];

    // 把全部的.nav__item--active移除, 再把被點擊的item加入class
    allNavItems.forEach(navItem =>
      navItem.classList.remove('nav__item--active')
    );
    e.target.closest('.nav__item').classList.add('nav__item--active');

    // 取得被點擊的item其offsetTop(和parentElement的距離(最近))
    const offsetTop = e.target.closest('.nav__item').offsetTop;
    markerRef.current.style.transform = `translate(-0.75rem, calc(-50% + ${offsetTop}px))`;
  };

  return (
    <div className="content__nav">
      <ul ref={navListRef} className="nav__list">
        <li onClick={e => onClick(e, 'map')} className="nav__item">
          <a href="/#" className="nav__link">
            <i className="fas fa-cloud"></i>
          </a>
        </li>
        <li onClick={e => onClick(e, 'covid-chart')} className="nav__item">
          <a href="/#" className="nav__link">
            <i className="fas fa-virus"></i>
          </a>
        </li>
        <span ref={markerRef} className="nav__marker"></span>
      </ul>
    </div>
  );
};

export default connect(null, { toggleContentTab })(ContentNav);
