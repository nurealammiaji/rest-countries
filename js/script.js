let loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

let displayCountries = countries => {
    for (let country of countries) {
        let code = country.cca2;
        let allCountries = document.getElementById("all-countries");
        let countryCard = document.createElement("div");
        countryCard.classList.add("card");
        countryCard.innerHTML = `
        <img src="${country.flags.png}" alt="${country.name.common}" />
        <h3>Country: ${country.name.common}</h3>
        <h5>Capital: ${country.capital ? country.capital : 'No Capital'}</h5>
        <button class="button" onclick="loadCountryDetails('${code}')">Details</button>
        `;
        allCountries.appendChild(countryCard);
    }
}

let loadCountryDetails = code => {
    let url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data))
}

let displayCountryDetails = (country) => {
    let countryDetails = document.getElementById("country-details");
    countryDetails.innerHTML = `
    <h3>Official Name: ${country[0].name.official}</h3>
    <h3>Country Code: ${country[0].cca3}</h3>
    <h3>Top Level Domain: ${country[0].tld ? country[0].tld : 'No Domain'}</h3>
    <h3>Mini Flag: ${country[0].flag}</h3>
    `;
}

loadCountries();