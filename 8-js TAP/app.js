const btn = document.querySelector('button');
function findCountry() {
    const input = document.getElementById('countryInput');
    const country = input.value;
    const resultDiv = document.getElementById('result');
    

    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                const countryData = data[0];

                resultDiv.innerHTML = `
                    <h2>${countryData.name.common}</h2>
                    <img src="${countryData.flags.png}" alt="Flag">
                    <p>${countryData.capital}</p>
                `
            } else {
                alert('Страна не найдена');
            }
        });
}

btn.onclick = ()=> {
    findCountry()
}
