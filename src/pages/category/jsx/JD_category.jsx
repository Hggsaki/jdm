import React from 'react';

import '../css/category.scss';

import JD_topBar from './JD_topBar';
import JD_main from './JD_main';

export default function JD_category(){
    return <div className="jd_category">
        {/*顶部通栏 */}
        <JD_topBar></JD_topBar>
        {/*主体内容 */}
        <JD_main></JD_main>
    </div>
}