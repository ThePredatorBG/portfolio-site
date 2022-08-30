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

var inputField = document.querySelector('.inputField')
var button = document.querySelector('.button')

button.addEventListener('click', function()
{
	document.querySelector(".hideShow").style.visibility="visible";

	fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputField.value+'&units=metric&appid=5f7edfcf5d7bb904e231e538fb098ad4')
	.then(response => response.json())
	.then(data =>
		{
			document.querySelector("#day0Min").innerHTML = "Min: " + data.main.temp_min + "°C";
			document.querySelector("#day0Max").innerHTML = "Max: " + data.main.temp_max + "°C";
			document.querySelector("#img0").src = "http://openweathermap.org/img/wn/" + data.weather[0].icon+"@2x.png";
		})

	 fetch('https://api.openweathermap.org/data/2.5/forecast?q='+inputField.value+'&units=metric&appid=5f7edfcf5d7bb904e231e538fb098ad4')
	 .then(response => response.json())
	 .then(data =>
	 	{
				for(i=0;i<5;i++)
				{
					document.querySelector("#day" + (i+1) + "Min").innerHTML = "Min: " + data.list[i].main.temp_min + "°C";
					document.querySelector("#day" + (i+1) + "Max").innerHTML = "Max: " + data.list[i].main.temp_max + "°C";
					document.querySelector("#img" + (i+1)).src = "http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon+"@2x.png";
				}
	 	})

		const d = new Date();
		const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

		function CheckDay(day)
		{
			if (day +d.getDay() > 6)
			{
				return day +d.getDay()-7;
			}
			else
			{
				return day + d.getDay();
			}
		}

		document.querySelector("#day0").innerHTML = weekday[CheckDay(0)];
		for(i=0;i<5;i++)
		{
			document.querySelector("#day"+(i+1)).innerHTML = weekday[CheckDay(i)];
		}
})
