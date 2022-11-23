const api ={
    key:"52a2eab35043cdefc13f17e12b3b4b16",
    baseurl:"https://api.openweathermap.org/data/2.5/"
};
const searchBox =document.querySelector('.search-box');
searchBox.addEventListener('keyup',setQuery)

// setQuery input ichidagi ma'lumotlar
function setQuery(e){
    if( e.keyCode == 13){
        getResults(searchBox.value);
        console.log(searchBox.value);
    }
}
function getResults (query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather =>{
            return weather.json();
        }).then(displayResults)
}
function displayResults(weather){
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerHTML = `${weather.name}, ${weather.sys.country}`
    let now = new Date();
    let date = document.querySelector('.location .date')
    date.innerHTML =dateBuilder(now)
    let temp =document.querySelector('.temp')
    temp.innerHTML=`${Math.round(weather.main.temp)}<span>&#8451;</span>`
    let weatherEl = document.querySelector('.weather')
    weatherEl.innerHTML = weather.weather[0].main
    let hilow = document.querySelector('.hi-low')
    hilow.innerHTML =`${Math.round(weather.main.temp_min)}&#8451; / ${Math.round(weather.main.temp_max)}&#8451;`
}
function dateBuilder(m) {
    let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
    let days =[
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
    let day = days[m.getDay()]
    let date = m.getDate()
    let month = months[m.getMonth()]
    let year = m.getFullYear()
    return`${day}, ${date} ${month}, ${year}`
}