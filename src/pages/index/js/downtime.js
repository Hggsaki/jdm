module.exports = function(){
    var time = 60*60*11;

    var skTime = document.querySelector('.sk_time');
    var spans = skTime.querySelectorAll('span');

    var timer = setInterval(function(){
        time--;
        var h = Math.floor(time/3600);
        var m = Math.floor(time%3600/60);
        var s = time%60;
        
        spans[0].innerHTML = Math.floor(h/10);
        spans[1].innerHTML = h%10;

        spans[3].innerHTML = Math.floor(m/10);
        spans[4].innerHTML = m%10;

        spans[6].innerHTML = Math.floor(s/10);
        spans[7].innerHTML = s%10;

        if(time<=0)clearInterval(timer);
    },1000);
}