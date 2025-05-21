function timing() {
  const timer = document.getElementById("root");
  const date1 = new Date();
  const date2 = new Date("2028-07-01T00:00:00");
  const diff = date2 - date1;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  // Update innerHTML once with all values, not overwrite
  timer.innerHTML = `
    <div>
      <h1>Countdown to 1st July 2028</h1>
      <h2>${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds</h2>
    </div>
  `;
}

// Call it every second
setInterval(timing, 1000);

// Styling for center alignment
const timer = document.getElementById("root");
timer.style.display = "flex";
timer.style.justifyContent = "center";
timer.style.alignItems = "center";
timer.style.height = "100vh";
