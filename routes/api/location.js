const rp = require("request-promise");
var fs = require("fs");

function search(req, res, next) {
  var options = {
    uri: `https://nominatim.openstreetmap.org/search?q=${req.query.search}&format=json`,
    headers: {
      "User-Agent": "Request-Promise"
    },
    json: true // Automatically parses the JSON string in the response
  };

  rp(options)
    .then(data => {
      fs.appendFile("log.txt", 
`Search:${req.query.search}
Data:${JSON.stringify(data[0],null,2)}
-------------------------------
`, function(err) {
        if (err) {
          // append failed
          console.log(err)
        } else {
          // done
        }
      });
      res.json({ lat: data[0].lat, lon: data[0].lon, label:data[0].display_name.split(",")[0] });
    })
    .catch(function(err) {
      // API call failed...
      console.log(err);
    });
}

module.exports = {
  search
};
