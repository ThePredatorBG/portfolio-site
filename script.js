const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}))

var button = document.querySelector('.button')
var cityName = document.querySelector('.cityName');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click', function()
{
	fetch('https://api.openweathermap.org/data/2.5/weather?q=Ruse&units=metric&appid=5f7edfcf5d7bb904e231e538fb098ad4')
	.then(response => response.json())
	.then(data =>
		{
			var cityNameValue = data['name'];
			var tempValue = data['main']['temp'];
			var descValue = data['weather'][0]['description'];

			cityName.innerHTML = "City: "+cityNameValue;
			desc.innerHTML = "Description: "+descValue;
			temp.innerHTML = "Temperature (Celsius): "+tempValue;

			console.log(data);
		})
})
