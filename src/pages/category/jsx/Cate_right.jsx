import React from 'react';

import '../css/cate_right.scss';

import Hot_category from './cate_right_hot/Hot_category';

export default class Cate_right extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return <div className="cate_right">
            <div className="cate_right_box">
                {/**广告 */}
                <a className="banner" href="">
                    <img src={require('../../../images/hot_goods_header.jpg').default} alt="" />
                </a>
                <Hot_category></Hot_category>
                <Hot_category></Hot_category>
            </div>

        </div>
    }
}