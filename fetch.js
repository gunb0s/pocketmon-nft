//data1.pokemonkorea.co.kr/newdata/pokedex/mid/000101.png

https: var fs = require("fs"),
  request = require("request");

let filecount = 1;
var download = function (uri, filename, callback) {
  request.head(uri, function (err, res, body) {
    if (res.headers["content-type"] !== "image/png") return;

    request(uri).pipe(fs.createWriteStream(filename)).on("close", callback);
  });
};

// download(
//   "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000102.png",
//   "2.png",
//   function () {
//     console.log("done");
//   }
// );
const cnt = 89803;
for (let i = 10001; i <= 20000; i++) {
  let pad = String(i).padStart(6, "0");
  let uri = `https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/${pad}.png`;
  let filename = `./Images/${i}.png`;
  download(uri, filename, () => {});
}

// https://stackoverflow.com/questions/41846669/download-an-image-using-axios-and-convert-it-to-base64
