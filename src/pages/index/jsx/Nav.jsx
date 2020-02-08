import React from 'react';

import '@/pages/index/css/nav.scss';

var nav_p8 = ['分类1','分类2','分类3','分类4','分类5','分类6','分类7','分类8'];
var nav_a8 = ['category.html','#','#','#','#','#','#','#',]
var urlArr = [];
for (var i = 1; i <= 8; i++) {
	var obj = {};
	obj.id = i;
	obj.url = require('../../../images/nav_' + i + '.png').default;
	obj.nav_p8 = nav_p8[i-1];
	obj.nav_a8 = nav_a8[i-1];
	urlArr.push(obj);
}

export default class Nav extends React.Component {
	constructor() {
		super();
		this.state = {
			imgUrl: [
				...urlArr
			],
		};
	}

	render() {
		return <div className="jd_nav">
			<ul className="clearfix">
				{
					this.state.imgUrl.map(e => {
					return <li key={e.id}><a href={e.nav_a8}><img src={e.url} alt="" /><p>{e.nav_p8}</p></a></li>
					})
				}
			</ul>
		</div>
	}
}