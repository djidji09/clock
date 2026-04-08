function updateClock() {
    const now=new Date();
    const hours= now.getHours().toString().padStart(2, '0');
    const minutes= now.getMinutes().toString().padStart(2, '0');
    const seconds= now.getSeconds().toString().padStart(2, '0');
    const timestring = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timestring;
}

function setBackground(imageName) {
    document.documentElement.style.setProperty('--bg-image', `url(${imageName})`);
}

updateClock();
setInterval(updateClock, 1000);