module.exports = function () {
    var banner = document.querySelector('.jd_banner');
    var width = banner.offsetWidth;
    var imgBox = banner.querySelector('ul:first-child');
    var pointBox = banner.querySelector('ul:last-child');

    var points = pointBox.querySelectorAll('li');

    var index = 1;
    var timer = setInterval(function () {
        width = banner.offsetWidth;
        index++;
        addTransition();
        setTranslateX(-index * width);
        //console.log(index);
    }, 3000);

    imgBox.addEventListener('transitionend', function () {
        if (index >= 7) {
            index = 1;
            removeTransition();
            setTranslateX(-index * width);
        } else if (index <= 0) {
            index = 6;
            removeTransition();
            setTranslateX(-index * width);
        }
        //console.log(index);//index 1-6 对应点 0-5
        setPoint();
    })
    var setPoint = function () {
        for (var i = 0; i < points.length; i++) {
            points[i].classList.remove('now');
        }
        points[index - 1].classList.add('now');
    }
    var addTransition = function () {
        imgBox.style.transition = 'all 0.3s ease';
        imgBox.style.webkitTransition = 'all 0.3s ease';
    }
    var setTranslateX = function (x) {
        imgBox.style.transform = 'translateX(' + x + 'px)';
        imgBox.style.webkitTransform = 'translateX(' + x + 'px)';
    }
    var removeTransition = function () {
        imgBox.style.transition = 'none';
        imgBox.style.webkitTransition = 'none';
    }

    //滑动
    var distanceX = startX = 0;
    var ismove = false;
    imgBox.addEventListener('touchstart', function (e) {
        clearInterval(timer);
        startX = e.touches[0].clientX;
        //console.log(startX);
    });
    imgBox.addEventListener('touchmove', function (e) {
        distanceX = e.touches[0].clientX - startX;

        removeTransition();
        setTranslateX(-index * width + distanceX);
        ismove = true;
    });
    imgBox.addEventListener('touchend', function (e) {
        //console.log(distanceX);
        if (Math.abs(distanceX) < width / 3 && ismove === true) {
            addTransition();
            setTranslateX(-index * width);
        } else {
            if (distanceX > 0) {
                index--;
            } else {
                index++;
            }
            addTransition();
            setTranslateX(-index * width);
        }
        clearInterval(timer);
        timer = setInterval(function () {
            width = banner.offsetWidth;
            index++;
            addTransition();
            setTranslateX(-index * width);
            //console.log(index);
        }, 3000);
        startX=distanceX=0;
        ismove =false;
    });


}