// Update real-time date and time
function updateDateTime() {
    const now = new Date();
    const datetimeElement = document.getElementById("datetime");
    datetimeElement.textContent = now.toLocaleString();
}

// Simulated data for temperature and humidity (update with real sensor data)
function updateData() {
    const tempValue = document.getElementById("temp-value");
    const humidityValue = document.getElementById("humidity-value");

    // Simulate temperature and humidity values
    const temp = Math.floor(Math.random() * (35 - 15 + 1)) + 15; // Random 15-35°C
    const humidity = Math.floor(Math.random() * (80 - 20 + 1)) + 20; // Random 20-80%

    tempValue.textContent = `${temp}°C`;
    humidityValue.textContent = `${humidity}%`;

    // Update charts (placeholder)
    document.getElementById("temp-chart").style.backgroundColor =
        temp > 30 ? "#ff6b6b" : temp < 18 ? "#74c0fc" : "#8ce99a";

    document.getElementById("humidity-chart").style.backgroundColor =
        humidity > 60 ? "#74c0fc" : humidity < 30 ? "#ffd43b" : "#8ce99a";
}

// Initialize dashboard
updateDateTime();
setInterval(updateDateTime, 1000);
setInterval(updateData, 3000);