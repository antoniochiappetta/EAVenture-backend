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
    "name" : "Sconto Pizzeria X",
    "rating" : 1,
    "description" : "Sconto del 30%",
    "media" : [ "http://www.s3bucket.com/photo-id", "http://www.s3bucket.com/photo-id" ],
    "priceLevel" : "$$$$",
    "eventDate" : "2016-08-29T09:12:33.001Z"
  }, {
    "name" : "Sconto Pizzeria X",
    "rating" : 1,
    "description" : "Sconto del 30%",
    "media" : [ "http://www.s3bucket.com/photo-id", "http://www.s3bucket.com/photo-id" ],
    "priceLevel" : "$$$$",
    "eventDate" : "2016-08-29T09:12:33.001Z"
  } ],
  "delay" : {
    "reason" : "Road closure in via Giacomo Gatti",
    "amount" : 85
  },
  "allStops" : [ {
    "departureTime" : "2016-08-29T09:12:33.001Z",
    "sequence" : 1,
    "arrivalTime" : "2016-08-29T09:12:33.001Z",
    "trainStop" : {
      "city" : "Pompei",
      "latitude" : 40.849223,
      "name" : "Pompei Scavi",
      "stationId" : 801,
      "longitude" : 14.269264
    }
  }, {
    "departureTime" : "2016-08-29T09:12:33.001Z",
    "sequence" : 1,
    "arrivalTime" : "2016-08-29T09:12:33.001Z",
    "trainStop" : {
      "city" : "Pompei",
      "latitude" : 40.849223,
      "name" : "Pompei Scavi",
      "stationId" : 801,
      "longitude" : 14.269264
    }
  } ],
  "socialContents" : [ {
    "platform" : "YouTube",
    "url" : "http://www.youtube.com/content-id"
  }, {
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
