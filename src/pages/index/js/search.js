module.exports = function(){
    var search = document.querySelector('.jd_search_box');
    var banner = document.querySelector('.jd_banner');
    var height = banner.offsetHeight;

    window.onscroll = function(){
        var top = document.body.scrollTop + document.documentElement.scrollTop;

        var opacity =0;
        if(top>height){
            opacity = 0.85;
        }else{
            opacity = 0.85*(top/height);
        }

        search.style.background = 'rgba(216,80,92,'+opacity+')';
    }
}