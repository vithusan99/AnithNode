console.log('script works well');

// calling requests 
const countryBtn = document.querySelector('#country');

const ul = document.getElementById('countryList');
const list = document.createDocumentFragment();

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
       
        return response.json();
    }).then(data=>{
        let country=data

        countryBtn.removeAttribute('disabled')
        countryBtn.classList.remove('disabled')
        country?.autocomplete.map(item=>{
            console.log(item);
            let li = document.createElement('li');
            let name = document.createElement('h2');

            name.innerHTML = `${item._id}`;

            li.appendChild(name);
            list.appendChild(li);
            // document.querySelector('#countryList').innerText=item._id;
        })
    }).catch(error => {
        // Handle error
        countryBtn.removeAttribute('disabled');
        countryBtn.classList.remove('disabled');
        console.error('An error occurred:', error);
    });

    ul.appendChild(list);
    
    // console.log(response?.autocomplete);
    // let randomDataCountry= response.autocomplete[Math.floor(Math.random() * response?.autocomplete?.length)];
    // let randomDataCity= response.autocomplete[Math.floor(Math.random() * response?.autocomplete?.length)]?.city
    // console.log(randomDataCountry,randomDataCity);
}

async function getWeatherData(){
    const response = await fetch('/weather');
    const data = await response.json();
    console.log(data);
}