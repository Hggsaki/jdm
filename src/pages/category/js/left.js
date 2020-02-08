module.exports = function(){
    var parentBox = document.querySelector('.cate_left');
    var childBox =parentBox.querySelector('ul');

    var startY = 0;
    var distanceY = 0;
    var currentY = 0;
    ismove = false;
    

    childBox.addEventListener('touchstart',function(e){
        startY = e.touches[0].clientY;
    });
    childBox.addEventListener('touchmove',function(e){
        distanceY = e.touches[0].clientY-startY;
        var traslateY = distanceY + currentY;
        setTransform(traslateY);
    });
    childBox.addEventListener('touchend',function(e){
        currentY = currentY + distanceY;
    });

    var setTransform = function(y){
        childBox.style.transform = 'translateY('+y+'px)';
        childBox.style.webkitTransform = 'translateY('+y+'px)';
    }
}
