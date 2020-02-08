import React from 'react';
import ReactDOM from 'react-dom';
import JD_container from './jsx/JD_container';


ReactDOM.render(
    <JD_container></JD_container>
,document.getElementById('app'));


import search from './js/search';
import banner from './js/banner';
import downtime from './js/downtime';

window.onload = function (){
    search();
    banner();
    downtime();
}

