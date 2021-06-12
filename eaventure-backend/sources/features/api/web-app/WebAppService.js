/**
 * Searches inventory for social contents and interest items by train line
 * Searches inventory for social contents and interest items by train line
 *
 * trainId String train identifier from qr code
 * returns TrainContent
 **/
exports.searchInventory = function searchInventory (trainId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "interestItems" : [ {
    "images" : [ "http://www.s3bucket.com/photo-id", "http://www.s3bucket.com/photo-id" ],
    "name" : "Sconto Pizzeria X",
    "rating" : 1,
    "description" : "Sconto del 30%",
    "priceLevel" : "$$$$",
    "eventDate" : "2016-08-29T09:12:33.001Z"
  }, {
    "images" : [ "http://www.s3bucket.com/photo-id", "http://www.s3bucket.com/photo-id" ],
    "name" : "Sconto Pizzeria X",
    "rating" : 1,
    "description" : "Sconto del 30%",
    "priceLevel" : "$$$$",
    "eventDate" : "2016-08-29T09:12:33.001Z"
  } ],
  "delay" : {
    "reason" : "Road closure in via Giacomo Gatti",
    "amount" : 85
  },
  "allStops" : [ {
    "address" : "via Carlo Magno 30",
    "city" : "Pompei",
    "name" : "Pompei Scavi",
    "time" : "2016-08-29T09:12:33.001Z"
  }, {
    "address" : "via Carlo Magno 30",
    "city" : "Pompei",
    "name" : "Pompei Scavi",
    "time" : "2016-08-29T09:12:33.001Z"
  } ],
  "socialContents" : [ {
    "stop" : "Pompei Scavi",
    "platform" : "YouTube",
    "url" : "http://www.youtube.com/content-id"
  }, {
    "stop" : "Pompei Scavi",
    "platform" : "YouTube",
    "url" : "http://www.youtube.com/content-id"
  } ],
  "trainNumber" : "AD4453"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}
