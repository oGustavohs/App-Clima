document.addEventListener("DOMContentLoaded", function () {
  const cityInput = document.getElementById("cityInput");
  const searchBtn = document.getElementById("searchBtn");
  const loading = document.getElementById("loading");
  const weatherInfo = document.getElementById("weatherInfo");
  const cityName = document.getElementById("cityName");
  const weatherIcon = document.getElementById("weatherIcon");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");
  const error = document.getElementById("error");

  function setWeatherBackground(descricao) {
    document.body.className = "";
    const lowerDesc = descricao.toLowerCase();

    if (
      lowerDesc.includes("sun") ||
      lowerDesc.includes("clear") ||
      lowerDesc.includes("sol")
    ) {
      document.body.classList.add("sunny");
    } else if (
      lowerDesc.includes("cloud") ||
      lowerDesc.includes("nublado") ||
      lowerDesc.includes("overcast")
    ) {
      document.body.classList.add("cloudy");
    } else if (
      lowerDesc.includes("rain") ||
      lowerDesc.includes("shower") ||
      lowerDesc.includes("chuva") ||
      lowerDesc.includes("drizzle")
    ) {
      document.body.classList.add("rainy");
    } else if (lowerDesc.includes("night") || lowerDesc.includes("noite")) {
      document.body.classList.add("night");
    } else {
      document.body.classList.add("cloudy");
    }
  }

  async function buscarClima() {
    const cidade = cityInput.value.trim();
    if (!cidade) {
      mostrarErro("Digite uma cidade!");
      return;
    }

    loading.classList.remove("hidden");
    weatherInfo.classList.add("hidden");
    error.classList.add("hidden");

    try {
      const response = await fetch(`https://wttr.in/${cidade}?format=j1`);
      const data = await response.json();

      loading.classList.add("hidden");

      const weatherDesc = data.current_condition[0].weatherDesc[0].value;
      setWeatherBackground(weatherDesc);

      cityName.textContent = cidade.toUpperCase();
      temperature.textContent = `${data.current_condition[0].temp_C}°C`;
      description.textContent = weatherDesc;
      weatherIcon.src = `https://wttr.in/${cidade}.png?0`;

      weatherInfo.classList.remove("hidden");
      console.log("Clima:", data);
    } catch (err) {
      loading.classList.add("hidden");
      mostrarErro('Cidade não encontrada! Tente "Sao Paulo", "London", "Rio"');
    }
  }

  function mostrarErro(msg) {
    error.textContent = msg;
    error.classList.remove("hidden");
  }

  searchBtn.addEventListener("click", buscarClima);
  cityInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") buscarClima();
  });
});
