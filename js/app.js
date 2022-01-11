const fireworkContainer = document.querySelector('.fireworks-container');
const daySpan = document.querySelector('#days');
const hoursSpan = document.querySelector('#hours');
const minutesSpan = document.querySelector('#minutes');
const secondsSpan = document.querySelector('#seconds');
const newYear = document.querySelector('#new-year');

const now = new Date();

newYear.innerHTML = now.getFullYear()+1;

const countToDate = new Date(now.getFullYear()+1, 0 , 1).getTime();

const countDown = ()=>{
    const now = new Date().getTime();
    const distance = countToDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60))/(1000*60));
    const seconds = Math.floor((distance % (1000*60))/1000);

    daySpan.innerHTML = days;
    hoursSpan.innerHTML = hours;
    minutesSpan.innerHTML = minutes;
    secondsSpan.innerHTML = seconds;

    if(distance < 0){
        clearInterval(countdownInterval);
    }
}
countDown();
const countdownInterval = setInterval(countDown, 1000);

const fireworks = new Fireworks(fireworkContainer,{
    speed: 4,
    acceleration: 1.05,
    friction: 1,
    gravity: 4,
    particles: 400,
    explosion: 10
})
fireworks.start();