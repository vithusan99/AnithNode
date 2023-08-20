console.log('script works well');

getThingData()
getWeatherData()
async function getThingData(){
    const response = await fetch('/things');
    const data = await response.json();
    console.log(data);
}
async function getWeatherData(){
    const response = await fetch('/weather');
    const data = await response.json();
    console.log(data);
}