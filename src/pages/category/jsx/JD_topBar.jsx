import React from 'react';

import '../css/topBar.scss';


export default class jd_topBar extends React.Component{
    constructor(){
        super();
        this.state = {};
    }

    render(){
        return <header className="jd_topBar">
            <a href="#" className="icon_back"></a>
            <form action="#">
                <input type="search" name="" id="" placeholder="羊羊羊"/>
            </form>
            <a href="#" className="icon_menu"></a>
        </header>
    }
}