import React from 'react';

import '../css/cate_left.scss';

var cateList = ['分类', '分类', '分类', '分类', '分类', '分类', '分类', '分类', '分类', '分类', '分类', '分类', '分类', '分类', '分类', '分类', '分类', '分类', '分类', '分类',];
var arr = [];
for (var i = 1; i <= 20; i++) {
    var obj = {};
    obj.id = i;
    obj.item = cateList[i - 1]+i;
    arr.push(obj);
}

export default class Cate_left extends React.Component {
    constructor() {
        super();
        this.state = {
            leftList: [
                ...arr
            ]
        };
    }

    render() {
        return <div className="cate_left">
            <ul>
                {this.state.leftList.map(e => {
                    return <li key={e.id}>
                    <a href="#">{e.item}</a></li>
                })}
            </ul>
        </div>
    }
}