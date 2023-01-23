function countdown() {
    const container_days = document.getElementById("days")
    const container_hours = document.getElementById("hours")
    const container_minutes = document.getElementById("minutes")
    const container_seconds = document.getElementById("seconds")

    const nextBirthDate = "21 Dec 2023";
    const target = new Date(nextBirthDate);
    const now = new Date();

    const totalSeconds = Math.floor((target - now) / 1000);
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = totalSeconds % 60;

    container_days.innerHTML = days;
    container_hours.innerHTML = hours;
    container_minutes.innerHTML = minutes;
    container_seconds.innerHTML = seconds;
}

setInterval(countdown, 1000)