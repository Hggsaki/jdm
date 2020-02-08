import React from 'react';

import '../css/product.scss';
import '../css/pro_css/sectionCommon.scss';

import Section1 from './products/section1';
import Section2 from './products/section2';
import Section3 from './products/section3';
import Section4 from './products/section4';

export default class Product extends React.Component{
    constructor(){
        super();
        this.state = {};
    }

    render(){
        return <div className="jd_prod">
            <Section1></Section1>
            <Section2></Section2>
            <Section3></Section3>
            <Section4></Section4>
        </div>
    }
}