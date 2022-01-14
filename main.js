let countries ;
let countriesList = document.getElementById("countries");

countriesList.addEventListener("change", function(event) {
  displayCountryInfo(event.target.value);
});

fetch("https://restcountries.com/v2/all")
.then(function(Response)
{
  return Response.json();
})
.then(function(data)    
{
  start(data);
})
.catch(function(error){
  alert('error')
  
});

function start(countriesData){
 countries = countriesData;
let options = "";
for (let i=0 ; i<countries.length; i++) 
{
  
  options += `<option value = "${countries[i].alpha3Code}">${countries[i].name}</option>`;
}
document.getElementById("countries").innerHTML = options;


 }

 function displayCountryInfo(test){

  var countryData = countries.find(country => country.alpha3Code === test);
 
  
   document.getElementById("capital").innerHTML = countryData.capital;
   document.getElementById("dialingCode").innerHTML =  `+${countryData.callingCodes}`;
   document.getElementById("population").innerHTML = countryData.population.toLocaleString();
   document.getElementById("timezone").innerHTML = countryData.timezones;
   document.getElementById("region").innerHTML = countryData.region;
   document.getElementById("subregion").innerHTML = countryData.subregion;
   document.getElementById("languages").innerHTML = countryData.languages.map(l => `${l.name}`);
   
   document.querySelector("#flag img").src= countryData.flag;
   
  
 }

 