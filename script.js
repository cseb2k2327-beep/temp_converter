function convertTemp() {
    let temp = parseFloat(document.getElementById("tempInput").value);
    let from = document.getElementById("fromUnit").value;
    let to = document.getElementById("toUnit").value;
    let result;

    if (isNaN(temp)) {
        document.getElementById("result").innerText = "Please enter a valid number";
        return;
    }

    // Convert to Celsius first
    let celsius;
    if (from === "C") {
        celsius = temp;
    } else if (from === "F") {
        celsius = (temp - 32) * 5 / 9;
    } else if (from === "K") {
        celsius = temp - 273.15;
    }

    // Convert from Celsius to target unit
    if (to === "C") {
        result = celsius;
    } else if (to === "F") {
        result = (celsius * 9 / 5) + 32;
    } else if (to === "K") {
        result = celsius + 273.15;
    }

    document.getElementById("result").innerText =
        "Result: " + result.toFixed(2) + " °" + to;
}
