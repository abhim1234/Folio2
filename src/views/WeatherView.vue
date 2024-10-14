<template>
  <div class="container">
    <div class="header">
      <h1>WEATHER APP</h1>
      <div class="search-bar">
        <input
          type="text"
          v-model="city"
          placeholder="Enter city name"
          class="search-input"
        />
        <button @click="searchByCity" class="search-button">Search</button>
      </div>
    </div>

    <main v-if="weatherData" class="weather-info">
      <!-- Line 1: City, Country -->
      <h2>{{ weatherData.name }}, {{ weatherData.sys.country }}</h2>
      
      <!-- Line 2: Weather Icon -->
      <div>
        <img :src="iconUrl" alt="Weather Icon" v-if="iconUrl" class="weather-icon" />
      </div>
      
      <!-- Line 3: Temperature -->
      <div class="temperature">{{ temperature }} °C</div>

      <!-- Line 4: Weather Description -->
      <div class="description">{{ weatherData.weather[0].description }}</div>
    </main>
  </div>
</template>



<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      city: "",
      weatherData: null,
    };
  },
  computed: {
    temperature() {
      return this.weatherData ? this.weatherData.main.temp : null;
    },
    iconUrl() {
      return this.weatherData
        ? `https://openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png`
        : null;
    },
    apiKey() {
      return import.meta.env.VITE_WEATHER_API_KEY || 'd738dcfc9fb558dfa24f85a305972c6c'; // Make sure the API key is in your .env file
    },
  },
  mounted() {
    this.fetchCurrentLocationWeather();
  },
  methods: {
    async fetchCurrentLocationWeather() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}&units=metric`;
          await this.fetchWeatherData(url);
        });
      }
    },
    async fetchWeatherData(url) {
      try {
        const response = await axios.get(url);
        this.weatherData = response.data;
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    },
    async searchByCity() {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`;
      await this.fetchWeatherData(url);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.search-bar {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.search-input {
  padding: 10px;
  font-size: 16px;
  width: 300px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  box-sizing: border-box;
}

.search-button {
  padding: 10px 20px;
  font-size: 16px;
  height: 40px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

.search-button:hover {
  background-color: #0056b3;
}

.weather-info {
  text-align: center;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.weather-icon {
  width: 100px;
  height: 100px;
  margin: 10px 0;
}

.temperature {
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
}

.description {
  font-size: 18px;
  color: #555;
  margin: 10px 0;
}

/* Ensure each element is stacked vertically */
.weather-info > * {
  display: block;
  width: 100%;
  text-align: center;
}
</style>

