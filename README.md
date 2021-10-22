# my-map

* 一個利用React, Redux, SCSS, Google Map API架設於Netlify的天氣地圖與Covid-19地圖

## 網站功能

* SPA 與 RWD網站設計
* 當前位置的即時天氣概況在地圖上顯示(google-map-react,WeatherAPI.com)
* 點擊地圖上的天氣圖示將顯示今日天氣及明後兩天的天氣預報
* 左方功能欄的第一欄有當日24小時的每小時預報
* 左方功能欄的第二欄可以將當前地圖位置座標加入最愛，且點擊最愛列的座標時，地圖將跳轉至此座標
* 網站右上方有搜尋列，輸入任意地標、路名、城市等等將顯示符合的結果，點擊後地圖將跳轉至此座標(@react-google-maps/api)
* 地圖右上方有切換列，可以切換至Covid-19地圖，包含各國家的總確診數，以及當日新增確診數

## 使用的工具

* 前端
    * ReactJS
    * Redux
        * Redux-Thunk
    * Axios
    * SCSS
    * google-map-react
    * @react-google-maps/api
    * COVID-19(API)
    * WeatherAPI.Com(API)

* 網站部署
    * Netlify

