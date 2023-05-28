// async function fetchWeatherDeatils(city){
//     let latitude=15.3333;
//     let longitude=74.0833;
    
//     const response =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=891a0bf81533345d71dfaf4d7fa285e2`);

//     const data=await response.json();

//     // console.log(data);
//     renderInfo(data);

// }

// fetchWeatherDeatils("pune");

// function getLocation(){
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }

//     else{
//         console.log("Unable to get the location");
//     }
// }

// function showPosition(position){
//     let lat=position.coords.latitude;
//     let longi=position.coords.longitude;

//     console.log(lat);
//     console.log(longi);

// }

let dataDisplay=document.querySelector(".data-cont");
let searDisplay=document.querySelector(".search-cont");

let yourWeaBtn=document.querySelector(".your-wea");
let searWeaBtn=document.querySelector(".sear-wea");

let loader=document.querySelector(".loader");

let cityName=document.querySelector(".city");

let tempDisplay=document.querySelector(".temp");
let speedDisplay=document.querySelector(".speed");
let humidDisplay=document.querySelector(".humid");
let cloudDisplay=document.querySelector(".cloud");
let weaDisplay=document.querySelector(".weather");

let inputCity=document.querySelector(".input-city");
let searchBtn=document.querySelector(".searchbtn");

let notFound=document.querySelector(".notFound");

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }

    else{
        console.log("Location Access Denied")
    }
}

function showPosition(position){
    let lat=position.coords.latitude;
    let lon=position.coords.longitude;
    
    renderCurrWeatther(lat, lon);
}

getLocation();

function renderData(data){
    loader.classList.add("inactive");

    cityName.textContent=data.name;
    let t=data.main.temp;
    t=t-273;

    tempDisplay.textContent=t.toFixed(2)+" C";
    speedDisplay.textContent=data.wind.speed+"m/s";
    humidDisplay.textContent=data.main.humidity+"%";
    cloudDisplay.textContent=data.clouds.all+"%";
    weaDisplay.textContent="Thunderstorm";
    dataDisplay.classList.remove("inactive");
    searDisplay.classList.add("inactive");
    
}
function renderData1(data){
    loader.classList.add("inactive");

    cityName.textContent=data.name;
    let t=data.main.temp;
    t=t-273;

    tempDisplay.textContent=t.toFixed(2)+" C";
    speedDisplay.textContent=data.wind.speed+"m/s";
    humidDisplay.textContent=data.main.humidity+"%";
    cloudDisplay.textContent=data.clouds.all+"%";
    weaDisplay.textContent="Thunderstorm";
    dataDisplay.classList.remove("inactive");
    // searDisplay.classList.add("inactive");
    
}

async function renderCurrWeatther(lat, lon){
    notFound.classList.add("inactive");

    dataDisplay.classList.add("inactive");
    loader.classList.remove("inactive");
    searDisplay.classList.add("inactive")

    // let response=await fetch('https://api.openweathermap.org/data/2.5/weather?q=goa&appid=891a0bf81533345d71dfaf4d7fa285e2')
    let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=891a0bf81533345d71dfaf4d7fa285e2`)
    let data=await response.json();

    // console.log(data);

    renderData(data);
    
}


yourWeaBtn.addEventListener("click", ()=>{
    // dataDisplay.classList.remove("inactive");
    // searDisplay.classList.add("inactive");
    yourWeaBtn.style.backgroundColor="#5a9cf1";
    searWeaBtn.style.backgroundColor="transparent";
    getLocation();
})

searWeaBtn.addEventListener("click", ()=>{
    yourWeaBtn.style.backgroundColor="transparent";
    searWeaBtn.style.backgroundColor="#5a9cf1";
    dataDisplay.classList.add("inactive");
    searDisplay.classList.remove("inactive");
})

let city;
inputCity.addEventListener("input", (e)=>{
    city=e.target.value;
})

async function renderCityWeatther(city){
    notFound.classList.add("inactive");
    dataDisplay.classList.add("inactive");
    loader.classList.remove("inactive");
    // searDisplay.classList.add("inactive")


    const response =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=891a0bf81533345d71dfaf4d7fa285e2`);
    if(response.ok){
        let data=await response.json();

        // console.log(data);
    
        renderData1(data);
    }
    else{
        // console.log("wrong input");
        notFound.classList.remove("inactive");
        
    }
    loader.classList.add("inactive");
    
    
}
searchBtn.addEventListener("click", ()=>{
    renderCityWeatther(city);
})


getLocation();
// renderCurrWeatther();


