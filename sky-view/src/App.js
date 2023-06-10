import { useEffect, useState } from "react";
import "./App.css";
import { api } from "./service";
import { Input } from "./components/Input";
import { useForm } from "react-hook-form";
import { MainStyled } from "./style/mainStyle";
import { ToastContainer, toast } from "react-toastify";
import diaNublado from "./assents/diaNublado.gif";
import chuva from "./assents/chuva.gif";
import noite from "./assents/noite.gif";
import noiteNublada from "./assents/noiteNublada2.gif";
import dia from "./assents/dia.gif";
import finalDeTarde from "./assents/finalDeTarde.gif";
import neblina from "./assents/neblina.gif";
import nevasca from "./assents/nevasca.gif";
import loading from "./assents/loading.gif";
import searchIcon from "./assents/search.svg.png";

function App() {
  const { register, handleSubmit } = useForm();
  const [city, setCity] = useState("guarulhos");
  const [img, setImg] = useState(loading);
  const [type, setType] = useState("loading");
  const [description, setDescription] = useState("");
  const [temperature, setTemperature] = useState("");
  const [nameCity, setNameCity] = useState("");
  const [bandeira, setBandeira] = useState("");

  async function getClimaCity() {
    try {
      const response = await api.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d3e7a9cb45b47d42a0507c209bceb58e&lang=pt_br`
      );
      console.log(response.data);
      const icon = response.data.weather[0].icon;
      const code = response.data.weather[0].id;
      const description = response.data.weather[0].description;
      const temp = response.data.main.temp;
      const nameCity = response.data.name;
      const simbolo = response.data.sys.country;
      setTemperature(Math.round(temp));
      setDescription(description);
      setNameCity(nameCity);
      getFlage(simbolo);

      const timestamp = response.data.dt;
      const date = new Date(timestamp * 1000);
      const hora = date.getHours();

      const ultimoCaractere = icon.charAt(icon.length - 1);
      // const ultimoCaractere = icon.charAt(icon.length - 1);

      if (code >= 800 && ultimoCaractere == "d" && hora >= 16 && hora < 18) {
        setImg(finalDeTarde);
        setType("finalDeTarde");
      } else if (code == 800 && ultimoCaractere == "d") {
        setImg(dia);
        setType("dia");
      } else if (code == 800 && ultimoCaractere == "n") {
        setImg(noite);
        setType("noite");
      } else if (code >= 200 && code <= 300) {
        setImg(chuva);
        setType("chuva");
      } else if ((code >= 300 && code <= 400) || (code >= 500 && code <= 599)) {
        setImg(chuva);
        setType("chuva");
      } else if (code >= 700 && code <= 799) {
        setImg(neblina);
        setType("neblina");
      } else if (code >= 600 && code <= 699) {
        setImg(nevasca);
        setType("nevasca");
      } else if (code >= 800 && ultimoCaractere == "d") {
        setImg(diaNublado);
        setType("diaNublado");
      } else if (code >= 800 && ultimoCaractere == "n") {
        setImg(noiteNublada);
        setType("noiteNublada");
      }
    } catch (error) {
      toast.error("Cidade não encontrada 🥲");
    }
  }
  useEffect(() => {
    getClimaCity();
  }, [city]);

  const newCity = (data) => {
    const city = data.city;
    setCity(city);
  };

  const getFlage = async (pais) => {
    try {
      const response = await api.get(
        `https://restcountries.com/v3/alpha/${pais}`
      );
      console.log(response);
      console.log(response.data[0].flags[0]);
      setBandeira(response.data[0].flags[0]);
    } catch {}
  };

  useEffect(() => {
    const htmlTag = document.getElementsByTagName("html")[0];
    htmlTag.classList = [];
    htmlTag.classList.add(type);
  });

  return (
    <div className="App">
      <MainStyled>
        <img className="img" src={img} />
        {temperature && <h1>{temperature} ºC</h1>}
        {description && <h3>{description}</h3>}
        <form onSubmit={handleSubmit(newCity)}>
          <Input
            type="text"
            placeholder="Pesquise sua cidade aqui"
            register={register("city")}
          />
          <button type="submit">Buscar</button>
        </form>
        <div className="flag">
          {nameCity && <h5>{nameCity}</h5>}
          {nameCity && <img className="img-flag" src={bandeira} />}
        </div>
      </MainStyled>
      <ToastContainer />
    </div>
  );
}

export default App;
