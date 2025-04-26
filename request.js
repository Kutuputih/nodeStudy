console.log("dwa"); //bekas debug
import https from "https";
console.log("dwa");

https
  .get("https://kutuputih.github.io/Pokedex-1.0/src/index.html", (response) => {
    console.log("dwa");
    let data = "";
    response.on("data", (chunk) => {
      data += chunk;
    });
    response.on("end", () => {
      console.log(data);
    });
  })
  .on("error", (error) => {
    console.log(error);
  });
