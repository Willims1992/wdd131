// Get the current year
const currentYear = new Date().getFullYear();

// Output the copyright year in the first paragraph of the footer
document.querySelector('footer p:first-of-type').textContent = `© ${currentYear} Ofonime A. William
 Uyo Nigeria`;

// Get the date the document was last modified
const lastModified = document.lastModified;

// Output the date the document was last modified in the second paragraph of the footer
document.querySelector('footer p:nth-of-type(2)').textContent = `Last Modified: ${lastModified}`;




// Calculate Wind Chill
function calculateWindChill(temp, windSpeed) {
    return Math.round(
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temp * Math.pow(windSpeed, 0.16)
    );
}

const temperature = 10; // static value in Celsius
const windSpeed = 5; // static value in km/h

if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("windchill").textContent = `${windChill} °C`;
} else {
    document.getElementById("windchill").textContent = "N/A";
}