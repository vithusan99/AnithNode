console.log('script works well');

// calling requests 
const countryBtn = document.querySelector('#country');

countryBtn.addEventListener('click',()=>{
    countryBtn.setAttribute('disabled',true);
    countryBtn.classList.add('disabled')
    getThingData()
});

getWeatherData()

// request methods 
async function getThingData(){
    const response = await fetch('/things')
    .then(response => {
        // Handle successful response
        countryBtn.removeAttribute('disabled');
        countryBtn.classList.remove('disabled')
        return response.json();
    })
    .catch(error => {
        // Handle error
        countryBtn.removeAttribute('disabled')
        countryBtn.classList.remove('disabled')
        console.error('An error occurred:', error);
    });
    console.log(response);
    let randomDataCountry= response.autocomplete[Math.floor(Math.random() * response?.autocomplete?.length)];
    let randomDataCity= response.autocomplete[Math.floor(Math.random() * response?.autocomplete?.length)]?.city
    console.log(randomDataCountry,randomDataCity);
}

async function getWeatherData(){
    const response = await fetch('/weather');
    const data = await response.json();
    console.log(data);
}