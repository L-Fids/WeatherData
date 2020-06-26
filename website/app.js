const { response } = require("express");

const baseUrl = "http://api.openweathermap.org/data/2.5/weather?zip=";
const units = "&units=metric";
const newCountryCode = "ca";

// Today's Date
let today = new Date();
let newDate = today.getMonth()+'/'+ today.getDate()+'/'+ today.getFullYear();

// Add event listener to submit button
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', runGetPost);
let newZipCode;


// run the get/post logic
function runGetPost(e) {
    newZipCode = document.getElementById('postalcode').value;
    console.log(newZipCode, newCountryCode);
    getData(baseUrl, newZipCode, newCountryCode, apiKey, units);
    clearInputs();
}

function clearInputs() {
    document.getElementById('postalcode').value = "";
    document.getElementById('response').value = "";
}

// ASync GET Function (pass in the url components - need zipcode from inputs)
const getData = async (baseUrl, zipCode, countryCode, apiKey, units) => {
    // call API
    const res = await fetch (`${baseUrl}${zipCode},${countryCode}${apiKey}${units}`);
    //console.log(res);
    try {
        const data = await res.json();
        console.log(data);
    }
    catch(error) {
        console.log("Error", error);
        console.log(res);
    }
}

// Run the get function to check if data coming in

// ASync POST Function
const postData = async (url='', data = {}) => {
    const res = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    }
    catch (error) {
        console.log("Error", error);
    }
}