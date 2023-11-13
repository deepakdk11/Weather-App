// -------------------date-----------------
const date = document.querySelector("h3");
const good = document.querySelector("h2");
const time = document.querySelector(".time");
const ampm = document.createElement("span");

const currentDate = new Date();

let cDate = currentDate.getDate();
let cMonth = currentDate.getMonth();
let cYear = currentDate.getFullYear();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();

date.textContent = `${cDate}.${cMonth}.${cYear}`;

function getTime() {
  time.innerHTML = `${hours}:${minutes} `;
  time.appendChild(ampm);
  if (hours >= 0 && hours < 12) {
    good.textContent = "Good Morning";
  } else if (hours >= 12 && hours < 18) {
    good.textContent = "Good Afternoon";
  } else {
    good.textContent = "Good Evening";
  }
  if (hours >= 12) {
    ampm.textContent = "PM";
  } else {
    ampm.textContent = "AM";
  }
}

setInterval(getTime, 500);

// -------------weather-------------
const input = document.querySelector("input");
const btn = document.querySelector("button");
const celsius = document.querySelector(".celsius");
const description = document.querySelector("h1");
const windSpeed = document.querySelector(".wind-speed");
const humanity = document.querySelector(".humanity");
// --------BOX TWO-----------
const smallCelsius = document.querySelector(".small-celsius");
const feelLike = document.querySelector(".feelLike");
const clouds = document.querySelector(".clouds");
const country = document.querySelector(".country");
const cityName = document.querySelector(".city");
// const pressure = document.querySelector(".pressure");
// const sea = document.querySelector(".sea");
// const lat = document.querySelector(".latt");
// const lon = document.querySelector(".lon");
const fahrenheitDeg = document.querySelector("h4");

// input.defaultValue = "chennai"

btn.addEventListener("click", () => {
  const link = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=c4376a409689571039ef541ac5c9b97f`
  );
  link.then((res) => res.json()).then((result) => fetchData(result));
});

let windSvg = `<svg xmlns=http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#000000" d="M4 10a1 1 0 0 1-1-1a1 1 0 0 1 1-1h8a2 2 0 0 0 2-2a2 2 0 0 0-2-2c-.55 0-1.05.22-1.41.59a.973.973 0 0 1-1.42 0c-.39-.39-.39-1.03 0-1.42C9.9 2.45 10.9 2 12 2a4 4 0 0 1 4 4a4 4 0 0 1-4 4H4m15 2a1 1 0 0 0 1-1a1 1 0 0 0-1-1c-.28 0-.53.11-.71.29a.996.996 0 0 1-1.41 0c-.38-.39-.38-1.02 0-1.41C17.42 8.34 18.17 8 19 8a3 3 0 0 1 3 3a3 3 0 0 1-3 3H5a1 1 0 0 1-1-1a1 1 0 0 1 1-1h14m-1 6H4a1 1 0 0 1-1-1a1 1 0 0 1 1-1h14a3 3 0 0 1 3 3a3 3 0 0 1-3 3c-.83 0-1.58-.34-2.12-.88c-.38-.39-.38-1.02 0-1.41a.996.996 0 0 1 1.41 0c.18.18.43.29.71.29a1 1 0 0 0 1-1a1 1 0 0 0-1-1Z"/></svg>`;
let human = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#000000" d="M12.275 19q.3-.025.513-.238T13 18.25q0-.35-.225-.563T12.2 17.5q-1.025.075-2.175-.563t-1.45-2.312q-.05-.275-.262-.45T7.825 14q-.35 0-.575.263t-.15.612q.425 2.275 2 3.25t3.175.875ZM12 22q-3.425 0-5.713-2.35T4 13.8q0-2.5 1.988-5.438T12 2q4.025 3.425 6.013 6.363T20 13.8q0 3.5-2.288 5.85T12 22Zm0-2q2.6 0 4.3-1.763T18 13.8q0-1.825-1.513-4.125T12 4.65Q9.025 7.375 7.513 9.675T6 13.8q0 2.675 1.7 4.438T12 20Zm0-8Z"/></svg>`;

function fetchData(result) {
  windSpeed.innerHTML = `${windSvg}${result.wind.speed}mph`;
  humanity.innerHTML = `${human}${result.main.humidity}%`;
  description.textContent = result.weather[0].description;
  celsius.textContent = `${temp(result.main.temp)}°C`;

  // -------BOX TWO--------
  clouds.textContent = result.weather[0].description;
  feelLike.innerHTML = "Feel Like " + temp(result.main.feels_like) + "°C";
  country.textContent = result.sys.country;
  cityName.textContent = result.name;
  // pressure.textContent = result.main.pressure
  // lat.textContent = result.coord.lat
  // lon.textContent = result.coord.lon
  smallCelsius.textContent = `${temp(result.main.temp)}°C`;
  fahrenheitDeg.textContent = `${fahrenheit(result.main.temp)}℉`;
}

function temp(cel) {
  const kelvin = 273.15;
  const result = cel - kelvin;
  return Math.round(result);
}

function fahrenheit(kel) {
  let fahrenheit = 1.8 * (kel - 273.15) + 32;
  return Math.round(fahrenheit);
}

fahrenheit(300);

// ---------------------DARK MODE-------------------

function checkClick(){
    const body = document.querySelector("body");
    const container = document.querySelector(".container");
    const boxTwo = document.querySelector(".box-two");
    const checkBox = document.querySelector("#cbx");

    if(checkBox.checked == true){
        body.classList.add("body")
        container.classList.add("dark")
        boxTwo.classList.add("boxDark")
    }else{
        body.classList.remove("body")
        container.classList.remove("dark")
        boxTwo.classList.remove("boxDark")
    }
}


// async function fetchData(){
//     try{
//         let city = "villpuram"
//         const link = await fetch('https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=c4376a409689571039ef541ac5c9b97f')
//         const data = link.json()
//         console.log(data)
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// fetchData()
