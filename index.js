const http = require("http");
const express = require("express");
const host = "0.0.0.0";
const port = 3000;

// const app = http.createServer((req, res)=>{
//     res.statusCode=200
//     res.setHeader('content-type','text/plain')
//     res.end('<h1> Anih server</h1>')
// })
const app = express();


app.use(express.static("public"));
// app.set('view-engine')
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}/`);
});


app.get("/things", async (request, res) => {
  try {
    const nodeFetch = await import("node-fetch");
    const url =
      "https://realtor.p.rapidapi.com/locations/v2/auto-complete?input=new%20york&limit=10";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d46ffd7681msh767efe3e612badep16a03fjsnbc1a4b4a7728",
        "X-RapidAPI-Host": "realtor.p.rapidapi.com",
      },
    };

    const response = await nodeFetch.default(url, options);
    const data = await response.json();

    res.json(data); // Send fetched data as a JSON response
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
  //   import("node-fetch")
  //     .then(nodeFetch => {
  //       // Use nodeFetch here
  //       console.log("data fetched");
  //     nodeFetch(url)
  //         .then((response) => response.json())
  //         .then((data) => {
  //           console.log("Fetched data:", data);
  //         })
  //         .catch((error) => {
  //           res.status(500).json({ error: "Fetch error" });
  //           console.error("Fetch error:", error);
  //         });
  //     })
  //     .catch((error) => {
  //       res.status(500).json({ error: "Import error" });
  //       console.log("error", error);
  //       // Handle the error
  //     });
  //   const thingDataResponse = fetchedDataApi.json();
  //   console.log(thingDataResponse);
  //   response.json(thingDataResponse);
});

app.get("/weather", async (request, res) => {
  try {
    const nodeFetch = await import("node-fetch");
    const url =
      "https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13";

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d46ffd7681msh767efe3e612badep16a03fjsnbc1a4b4a7728",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };
    const response = await nodeFetch.default(url, options);
    const data = await response.json();

    res.json(data); // Send fetched data as a JSON response
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
});
