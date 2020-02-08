import React from 'react';

import '@/pages/index/css/banner.scss';


export default class Banner extends React.Component {
    constructor() {
        super();
        this.state = {
            imgUrl: [
                { id: 0, url: require('../../../images/banner06.jpg') },
                { id: 1, url: require('../../../images/banner01.jpg') },
                { id: 2, url: require('../../../images/banner02.jpg') },
                { id: 3, url: require('../../../images/banner03.jpg') },
                { id: 4, url: require('../../../images/banner04.jpg') },
                { id: 5, url: require('../../../images/banner05.jpg') },
                { id: 6, url: require('../../../images/banner06.jpg') },
                { id: 7, url: require('../../../images/banner01.jpg') },  
            ]
        };
    }

    render() {
        return <div className="jd_banner">
            <ul className="clearfix">
                {
                    this.state.imgUrl.map(e => {
                        return <li key={e.id}><a href="#"><img src={e.url.default} alt=""/></a></li>
                    })
                }
            </ul>
            <ul className="clearfix">
                <li className="now"></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    }
}