import React from 'react';

import '../../css/hot/hot.scss';

var arr = ['分类1', '分类2', '分类3', '分类4', '分类5', '分类6', '分类7', '分类8', '分类9', '分类10',];
var arrList = [];
for (var i = 1; i <= 10; i++) {
    var obj = {};
    obj.id = i;
    obj.item = arr[i - 1];
    arrList.push(obj);
}
export default class Hot_category extends React.Component {
    constructor() {
        super();
        this.state = {
            proList: [
                ...arrList
            ]
        };
    }

    render() {
        return <div className="hot_category clearfix">
            <h3>热门分类</h3>
            <ul>
                {this.state.proList.map(e => {
                    return <li key={e.id}>
                        <a href="#">
                            <img src={require('../../../../images/sk01.png').default} alt="" />
                            <p>{e.item}</p>
                        </a>
                    </li>
                })}
            </ul>
        </div>
    }
}