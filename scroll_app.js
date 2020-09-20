function smoothScroll(target, duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
        if(startTime === null){
            startTime = currentTime
        }
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if(timeElapsed < duration) requestAnimationFrame(animation)
    }

    function ease(t, b, c, d){
        t /= d / 2;
        if(t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

var economy = document.querySelector('.economy');
economy.addEventListener('click', function(){
    smoothScroll('.economycard', 1000);
})

var environment = document.querySelector('.environment');
environment.addEventListener('click', function(){
    smoothScroll('.environmentcard', 1250);
})

var education = document.querySelector('.education');
education.addEventListener('click', function(){
    smoothScroll('.educationcard', 1500);
})

var accountability = document.querySelector('.accountability');
accountability.addEventListener('click', function(){
    smoothScroll('.accountabilitycard', 1750);
})

var healthcare = document.querySelector('.healthcare');
healthcare.addEventListener('click', function(){
    smoothScroll('.healthcarecard', 2000);
})

var housing = document.querySelector('.housing');
housing.addEventListener('click', function(){
    smoothScroll('.housingcard', 2250);
})




