import React from 'react';

import '@/pages/index/css/base.css';
import '@/pages/index/css/container.scss';

import Header from './Header';
import Banner from './Banner';
import Nav from './Nav';
import Product from './Product';

export default function JD_container(){
    return <div className="jd_container">
        {/*顶部搜索*/}
        <Header></Header>
        {/*轮播图*/}
        <Banner></Banner>
        {/*导航栏*/}
        <Nav></Nav>
        {/*产品区块*/}
        <Product></Product>
    </div>
}