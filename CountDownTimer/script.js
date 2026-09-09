const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

function updateCountdown() {
    const currentYear = new Date().getFullYear();

    console.log(currentYear);
    const newYear = new Date(`January 1, ${currentYear + 1} 00:00:00`);

    console.log(newYear);

    const currentDate = new Date();
    const diff = newYear - currentDate;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor((diff / 1000 / 60 / 60) % 24);
    const m = Math.floor((diff / 1000 / 60) % 60);
    const s = Math.floor((diff / 1000) % 60);

    minutes.innerHTML= m < 10 ? "0" +m : m;
    hours.innerHTML = h < 10 ? "0" +h : h;
    seconds.innerHTML = s < 10 ? "0" +s : s;
    days.innerHTML = d < 10 ? "0" +d : d;

}
updateCountdown();
setInterval(updateCountdown, 1000);