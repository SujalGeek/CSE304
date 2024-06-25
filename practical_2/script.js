const temp = {
    "mumbai" : "50",
    "vadodara": "30",
    "ahmedabad": "25",
    "chennai": "35",
    "delhi": "40",
    "kolkata": "38"
}

document.getElementById("weather-btn").addEventListener("click", () => {
    let city = document.getElementById("city").value;
    console.log(city);
    if(city === ""){
        alert("Please enter a city");
    }
    else if (city.toLowerCase() in temp){
        document.getElementById("weather").innerHTML = `The temperature of ${city.toLowerCase()} is ${temp[city.toLowerCase()]}°C`;
    }
    else {
        alert("Data for this city is not available");
    }
})
