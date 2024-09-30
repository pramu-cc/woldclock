const timeZones = [
    { name: "Europe", timeZone: "Europe/London" },
    { name: "Mumbai", timeZone: "Asia/Kolkata" },
    { name: "Australia", timeZone: "Australia/Sydney" },
    { name: "USA (New York)", timeZone: "America/New_York" },
    { name: "UK", timeZone: "Europe/London" },
    { name: "Japan", timeZone: "Asia/Tokyo" },
    { name: "Brazil", timeZone: "America/Sao_Paulo" },
    { name: "Canada (Toronto)", timeZone: "America/Toronto" },
    { name: "Russia (Moscow)", timeZone: "Europe/Moscow" },
    { name: "South Africa", timeZone: "Africa/Johannesburg" },
    { name: "China (Beijing)", timeZone: "Asia/Shanghai" },
    { name: "France (Paris)", timeZone: "Europe/Paris" },
    { name: "Germany (Berlin)", timeZone: "Europe/Berlin" },
    { name: "Mexico", timeZone: "America/Mexico_City" },
    { name: "New Zealand", timeZone: "Pacific/Auckland" }
];

function createClock(clockData) {
    const clockContainer = document.createElement('div');
    clockContainer.classList.add('clock');

    const clockFace = document.createElement('div');
    clockFace.classList.add('clock-face');

    const hourHand = document.createElement('div');
    hourHand.classList.add('hand', 'hour-hand');
    const minuteHand = document.createElement('div');
    minuteHand.classList.add('hand', 'minute-hand');
    const secondHand = document.createElement('div');
    secondHand.classList.add('hand', 'second-hand');

    clockFace.appendChild(hourHand);
    clockFace.appendChild(minuteHand);
    clockFace.appendChild(secondHand);
    clockContainer.appendChild(clockFace);

    const clockText = document.createElement('div');
    clockText.classList.add('clock-text');
    clockText.innerText = `${clockData.name}`;
    clockContainer.appendChild(clockText);

    document.getElementById('clocks').appendChild(clockContainer);

    function updateTime() {
        const now = new Date(new Date().toLocaleString("en-US", { timeZone: clockData.timeZone }));
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();

        const secondsDegrees = ((seconds / 60) * 360) + 90;
        const minutesDegrees = ((minutes / 60) * 360) + 90;
        const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

        clockText.innerText = `${clockData.name}: ${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
    }

    setInterval(updateTime, 1000);
    updateTime();
}

document.addEventListener("DOMContentLoaded", () => {
    timeZones.forEach(createClock);
});
