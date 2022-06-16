var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var city = document.querySelector('.city');
var date = document.querySelector('.date');
var temp = document.querySelector('.temp');
var humidity = document.querySelector('.humidity');
var wind = document.querySelector('.wind');
var index = document.querySelector('.index');

button.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=6bd89a137c016d048bc23676f4b46461')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        
        city.innerHTML = nameValue
        temp.innerHTML = tempValue;
        
    })

.catch(err => alert("Wrong city name!"))
})