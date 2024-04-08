import React, { useState } from 'react';
import DisplayWeather from './DisplayWeather';

const Weather = () => {
    const APIKEY = "5e36ac37b23254c292a4754631fa74ed";
    const [form, setForm] = useState({
        city: "",
        country: ""
    });

    const [weather, setWeather] = useState([]);

    async function weatherData(e) {
        e.preventDefault();
        if (form.city === "") {
            alert("Add values");
        } else {
            const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`
            ).then((response) => response.json())
                .then((data) => data)

            setWeather(
                {
                    data:data
                }
            
                );
        }
    }

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name === "city") {
            setForm({ ...form, city: value.trim() }); // Trim value to remove leading/trailing spaces
        }
        if (name === "country") {
            setForm({ ...form, country: value.trim() }); // Trim value to remove leading/trailing spaces
        }
    };

    return (
        <div className='m-8 p-5 rounded-3xl bg-[rgba(245,253,253,0.62)] max-w-max border-2 border-dashed border-gray-400'>
            <div className="text-8xl font-serif">
                <h4 className='text-3xl text-center font-inter'><span className='text-[#de495f]'>W</span>eather <span className='text-[#de495f]'>A</span>pp</h4>
            </div>
            <form className="mt-8" onSubmit={weatherData}>
                <input
                    type="text"
                    name="city"
                    placeholder='City'
                    className="p-2.5 border-b-2 border-dashed border-gray-400 mr-2.5 focus:outline-none focus:border-b-3 placeholder-gray-500"
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='country'
                    placeholder='Country'
                    className="p-2.5 border-b-2 border-dashed border-gray-400 mr-2.5 focus:outline-none focus:border-b-3 placeholder-gray-500"
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    className="ml-2.5 py-2 px-4 text-xl rounded-3xl border-2 border-black bg-[#de495f] cursor-pointer text-white hover:bg-transparent hover:text-[#de495f] focus:outline-none"
                >
                    Submit
                </button>
            </form>

            {
                weather.data!==undefined ?(
                    <div>
                        <DisplayWeather data ={weather.data}/>
                    </div>
                ):null
            }
        </div>
    );
}

export default Weather;

