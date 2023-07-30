import React,{useState} from 'react';
import './App.css';
import Search from './components/search/Search';
import CurrentWeather from "./components/current-weather/current-weather";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api"
import Forecast from './components/forecast/forecast';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  };
  return (
    <div className="container" >
      <Search onSearchChange={handleOnSearchChange} />
     { currentWeather &&   <CurrentWeather data={currentWeather} />}
     {forecast && <Forecast data={forecast} />}
    </div>
  );
};

export default App;

/**
 * Bu metot, Promise.all() kullanarak iki ayrı asenkron veri isteği yapar ve bu isteklerin tamamlandığında dönen sonuçları işler. Kod parçasındaki işleyiş aşağıdaki gibidir:

currentWeatherFetch ve forecastFetch adında iki adet asenkron veri isteği başlatılır. Bu istekler muhtemelen fetch fonksiyonları ile gerçekleştiriliyor ve her biri ayrı bir API'ye veya farklı veri kaynaklarına yönlendiriliyor olabilir.

Promise.all([currentWeatherFetch, forecastFetch]) ifadesi, bu iki isteği bir araya getirir ve her iki isteğin de tamamlanmasını bekler.

İki istek de tamamlandığında, .then() bloğu çalıştırılır. response adında bir dizi, her bir isteğin döndürdüğü sonuçları içerir.

await response[0].json() ifadesi, ilk isteğin döndürdüğü sonucu JSON formatına dönüştürür ve weatherResponse adında bir değişkene atar.

await response[1].json() ifadesi, ikinci isteğin döndürdüğü sonucu JSON formatına dönüştürür ve forcastResponse adında bir değişkene atar.

Son olarak, setCurrentWeather ve setForecast fonksiyonları kullanılarak weatherResponse ve forcastResponse verileri, searchData.label (şehir adı) ve diğer gerekli bilgilerle birlikte currentWeather ve forecast state değişkenlerine atanır.

Yani, bu metot asenkron olarak iki veri isteği yapar, bu isteklerin sonuçlarını alır ve sonuçları kullanarak iki farklı state değişkenini günceller. Bu sayede, currentWeather ve forecast state değişkenleri, şehir hava durumu verileri ve tahminleri ile güncellenmiş olur.
 */