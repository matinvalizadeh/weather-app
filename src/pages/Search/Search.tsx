import React, { useRef, useState, useEffect } from "react";
import useTitle from "../../hooks/useTitle";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

// images
import InfoIcon from "../assets/img/icon/Info.svg";
import loadingGif from "../assets/img/loading.gif";

// styles
import "./Search.css";

const apiKey = "75b9ff91c1c9b1d204bc50b6ee7bccda";

interface WeatherData {
  data: {
    name: string;
    sys: { country: string };
    main: { temp: number };
    weather: { description: string; icon: string }[];
  };
}

const Search: React.FC = () => {
  useTitle("جست و جو");

  const inputRef = useRef<HTMLInputElement>(null);
  const [apiData, setApiData] = useState<WeatherData | null>(null);
  const [spinner, setSpinner] = useState(false);

  const searchCity = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputRef.current?.value) return;

    setSpinner(true);
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputRef.current.value}&units=metric&appid=${apiKey}`;

    try {
      const response = await axios.get(URL);
      toast.success(`اطلاعات آب و هوای شهر ${inputRef.current.value} پیدا شد`);
      setApiData(response);
    } catch {
      toast.error(`شهر ${inputRef.current.value} پیدا نشد مجدد تلاش کنید`);
    } finally {
      setSpinner(false);
      inputRef.current.value = "";
    }
  };

  const dateBuilder = (d: Date) => {
    const months = [
      "January","February","March","April","May","June","July","August","September","October","November","December",
    ];
    const days = [
      "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",
    ];

    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="search-container">
      <div className="search-title">
        <h2>نام شهر خود را وارد کنید</h2>
        <p className="tooltip">
          <div>
            <img src={InfoIcon} alt="info icon" />
          </div>
          <span className="tooltiptext">
            در صورت عدم دریافت اطلاعات و بروز خطا لطفا از vpn استفاده کنید.
          </span>
        </p>
      </div>

      <form className="search-box" onSubmit={searchCity}>
        <input
          type="text"
          placeholder="نام شهر به انگلیسی"
          ref={inputRef}
        />
        <button type="submit">
          {spinner ? (
            <>
              <img src={loadingGif} alt="loading gif" /> جست و جو
            </>
          ) : (
            "پیدا کن"
          )}
        </button>
      </form>

      {apiData && (
        <div
          className="search-data"
          data-aos="fade-up"
          data-aos-offset="10"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <div className="data-description">
            <img
              src={`https://openweathermap.org/img/w/${apiData.data.weather[0].icon}.png`}
              alt="icon"
            />
            <p>{apiData.data.weather[0].description}</p>
          </div>

          <div>
            <p className="temp">{Math.round(apiData.data.main.temp)}°c</p>
            <h3>{`${apiData.data.name}, ${apiData.data.sys.country}`}</h3>
            <p>{dateBuilder(new Date())}</p>
          </div>
        </div>
      )}

      <Toaster
        toastOptions={{
          style: {
            border: "1px solid #f4f4f4",
            fontFamily: "YekanBakh",
            fontSize: "1.5rem",
          },
        }}
      />
    </div>
  );
};

export default Search;
