import React from 'react';

import img1 from '../../../../images/section2-1.png';
import img2 from '../../../../images/section2-2.png';
import img3 from '../../../../images/section2-3.png';

var img = [img1,img2,img3];

export default class Section1 extends React.Component {
    constructor() {
        super();
        this.state = {
            imgUrl:[
                ...img
            ]
        };
    }
    render() {
        return <section className="jd_proBox">
            
            <div className="pro_title"><h3>京东自营</h3></div>
            <div className="pro_content clearfix">
                <a className="w_p50 f_left b_right" href="#"><img src={this.state.imgUrl[0]} alt=""/></a>
                <a className="w_p50 f_right b_bottom" href="#"><img src={this.state.imgUrl[1]} alt=""/></a>
                <a className="w_p50 f_right" href="#"><img src={this.state.imgUrl[2]} alt=""/></a>
            </div>
        </section>
    }
}