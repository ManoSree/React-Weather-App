
import React from 'react';

const DisplayWeather = ({ data }) => {
  const iconUrl = `http://openweathermap.org/img/wn/${data.cod !== 404 ? data.weather[0].icon : null}.png`;

  return (
    <div className="displayweather mt-5 flex flex-col items-center">
      {/* Main Weather Card */}
      <div className="maincard max-w-sm w-full mx-auto mt-5 bg-[#7dd6f6e4] p-10 rounded-2xl relative border border-black">
  <div className="cardtitle text-xl">
    {data.name}, {data.sys.country}. Weather
  </div>
  <div className="cardsubtitle pt-5 text-gray-500">
    As of {new Date().toLocaleTimeString()}
  </div>
  <h1 className="text-6xl my-2">
    {Math.floor(data.main.temp - 273)}<sup>o</sup>
  </h1>
  <div className="text-2xl mb-2">{data.weather[0].main}</div>
  <img className="weather-icon w-24 mx-auto" src={iconUrl} alt="Weather Icon" />
  <div className="weather-description text-xl mt-2">
    {data.weather[0].description}
  </div>
</div>

      
      {/* Weather Details Sections */}
      {data.cod !== 404 && (
        <div className="weatherdetails w-full md:w-[500px] grid grid-cols-2 gap-4 p-4">
          <div className="section1">
            {/* Section 1 content */}
            <div className="flex justify-between">
              <table className="w-full">
                {/* Table content for section 1 */}
                <table>
             <tbody>
             <tr>
                  <td>
                    <h4>High/Low</h4>
                  </td>                  <td>
                   <span>
                     {Math.floor(data.main.temp_max - 273.15)}/{" "}
                     {Math.floor(data.main.temp_min - 273.15)}<sup>o</sup>
                   </span>
                 </td>
              </tr>                 <tr>                   <td>                     <h4>Humidity</h4>                   </td>                   <td>                     <span>{data.main.humidity} %</span>                   </td>                 </tr>                 <tr>                   <td>                     <h4>Pressure</h4>                   </td>                   <td>                     <span>{data.main.pressure} hPa</span>                   </td>                 </tr>                 <tr>                   <td>                     <h4>Visibility</h4>
               </td>                   <td>                     <span>{data.visibility / 1000} Km</span>                   </td>                 </tr>            </tbody>
               </table>
              </table>
            </div>
          </div>
          <div className="section2">
            {/* Section 2 content */}
            <div className="flex justify-between">
              <table className="w-full">
                {/* Table content for section 2 */}
                <table>
                 <tbody>
                 <tr>
                   <td>
                     <h4>Wind</h4>
                   </td>
                   <td>
                     <span>{Math.floor((data.wind.speed * 18) / 5)} km/hr</span>
                   </td>
                 </tr>
                 <tr>
                   <td>
                     <h4>Wind Direction</h4>
                   </td>
                   <td>                     <span>
                       {data.wind.deg}
                       <sup>o</sup> deg
                     </span>
                   </td>
                 </tr>
                 <tr>
                   <td>
                     <h4>Sunrise</h4>
                   </td>
                   <td>
                     <span>
                       {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                     </span>
                   </td>
                 </tr>
                 <tr>
                   <td>
                     <h4>Sunset</h4>
                   </td>
                   <td>
                     <span>
                       {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                     </span>               </td>
                 </tr>
                 </tbody>
               </table>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayWeather;
