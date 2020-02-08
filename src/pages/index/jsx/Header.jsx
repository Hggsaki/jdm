import React from 'react';

import '@/pages/index/css/search.scss';

export default class Header extends React.Component{
    constructor(){
        super();
        this.state = {};
    }

    render(){
        return <header className="jd_search">
            <div className="jd_search_box">
                <a href="#" className="icon_logo"></a>

                <form>
                    <span className="icon_search"></span>
                    <input  type="search" placeholder="Iphone X 免费领取"/>
                </form>
                <a href="#" className="login">登录</a>
            </div>
        </header>
    }
}