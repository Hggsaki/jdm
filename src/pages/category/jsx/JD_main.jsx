import React from 'react';

import '../css/main.scss';

import Cate_left from './Cate_left';
import Cate_right from './Cate_right';

export default function JD_main(){
    return <div className="jd_main">
        {/**左侧分类 */}
        <Cate_left></Cate_left>
        {/**右侧内容 */}
        <Cate_right></Cate_right>
    </div>
}