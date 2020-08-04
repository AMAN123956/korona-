const dataForm = document.getElementById("dataForm");
const cityNameInput = document.getElementById("cityName");
const container = document.querySelector(".container");

dataForm.addEventListener("submit", async(e) => {
    e.preventDefault();
    container.style.display="block";
    dataForm.style.display="none";
    const cityName = cityNameInput.value;
    const url = `https://disease.sh/v3/covid-19/countries/${cityName}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    document.querySelector("#country").innerHTML="Countries:"+data.country;
    document.querySelector("#cases").innerHTML="Total Cases:"+data.cases;
    document.querySelector("#deaths").innerHTML="Total Deaths:"+data.deaths;
    document.querySelector("#active").innerHTML="Active Cases:"+data.active;
    document.querySelector("#recovered").innerHTML="Recovered:"+data.recovered;
    document.querySelector("#todayCases").innerHTML="Today Cases:"+data.todayCases;
    document.querySelector("#todayDeaths").innerHTML="Today Deaths:"+data.todayDeaths;
    document.querySelector("#todayRecovered").innerHTML="Today Recovered:"+data.todayRecovered;
    document.querySelector("#casesPerOneMillion").innerHTML="Cases Per Million:"+data.casesPerOneMillion;
    document.querySelector("#deathsPerOneMillion").innerHTML="Deaths Per Million:"+data.deathsPerOneMillion;
    
    
});
