import React from 'react';
import ReactDOM from 'react-dom';
import IScroll from 'iscroll';



import './css/base.css';

import JD_category from './jsx/JD_category';


ReactDOM.render(
    <JD_category></JD_category>
,document.querySelector('#app'));

import leftSwipe from './js/left';


window.onload = function(){
    //leftSwipe();
    var leftScroll = new IScroll(document.querySelector('.cate_left'));

    var rightScroll = new IScroll(document.querySelector('.cate_right'));
}