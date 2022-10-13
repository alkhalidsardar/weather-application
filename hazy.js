let weather = {
    apiKey: "c0242ef097b1b12b237cadbec515bf1f",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
        alert("No weather found.");
           throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) { const { name } = data; 
    const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
    const { speed } = data.wind;
