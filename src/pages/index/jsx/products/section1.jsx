import React from 'react';

import '../../css/pro_css/section1.scss';

var imgArr = [];
var nowPrice = ['¥200', '¥200', '¥200'];
var oldPrice = ['¥2000', '¥2000', '¥2000'];
for (var i = 1; i <= 3; i++) {
    var imgObj = {};
    imgObj.id = i;
    imgObj.url = require('../../../../images/section1-' + i + '.png').default;
    imgObj.nowPrice = nowPrice[i-1];
    imgObj.oldPrice = oldPrice[i-1];
    imgArr.push(imgObj);
}

export default class Section1 extends React.Component {
    constructor() {
        super();
        this.state = {
            imgUrl:[
                ...imgArr
            ]
        };
    }
    render() {
        return <section className="jd_proBox">
            <div className="pro_title nb">
                <div className="f_left">
                    <span className="sk_icon"></span>
                    <span className="sk_text">掌上秒杀</span>
                    <span className="sk_time">
                        <span>0</span>
                        <span>0</span>
                        <span>:</span>
                        <span>0</span>
                        <span>0</span>
                        <span>:</span>
                        <span>0</span>
                        <span>0</span>
                    </span>
                </div>
                <div className="f_right m_r10"><a href="#">更多></a></div>
            </div>
            <div className="pro_content">
                <ul className="sk_product clearfix">
                    { 
                        this.state.imgUrl.map(e => {
                            return <li key={e.id}>
                                <a href="#"><img src={e.url} alt="" /></a>
                                <p className="now_price">{e.nowPrice}</p>
                                <p className="old_price">{e.oldPrice}</p>
                            </li>
                        })
                    }
                </ul>
            </div>
        </section>

    }
}