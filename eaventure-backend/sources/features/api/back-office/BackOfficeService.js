/**
 * Adds an interest item with an embedding url
 * Adds an interest item with an embedding url
 *
 * body InterestItem Interest item to add (optional)
 * no response value expected for this operation
 **/
 exports.addInterestItem = function addInterestItem (body) {
    return new Promise(function(resolve, reject) {
      resolve();
    });
  }
  
  
  /**
   * Adds an social content with an embedding url
   * Adds a social content with an embedding url
   *
   * body SocialContent Social content item to add (optional)
   * no response value expected for this operation
   **/
  exports.addSocialContent = function addSocialContent (body) {
    return new Promise(function(resolve, reject) {
      resolve();
    });
  }
  
  
  /**
   * Adds an train stop
   * Adds an train stop
   *
   * body TrainStop Train stop item to add (optional)
   * no response value expected for this operation
   **/
  exports.addTrainStop = function addTrainStop (body) {
    return new Promise(function(resolve, reject) {
      resolve();
    });
  }
  
  
  /**
   * Get a train stop by id
   * Get a train stop by id
   *
   * id Long train stop id
   * returns TrainStop
   **/
  exports.getTrainStop = function getTrainStop (id) {
    return new Promise(function(resolve, reject) {
      var examples = {};
      examples['application/json'] = {
    "city" : "Pompei",
    "latitude" : 40.849223,
    "name" : "Pompei Scavi",
    "stationId" : 801,
    "longitude" : 14.269264
  };
      if (Object.keys(examples).length > 0) {
        resolve(examples[Object.keys(examples)[0]]);
      } else {
        resolve();
      }
    });
  }
  
  
  /**
   * Searches list of train stops
   * Searches list of train stops 
   *
   * city String city (optional)
   * returns List
   **/
  exports.searchTrainStops = function searchTrainStops (city) {
    return new Promise(function(resolve, reject) {
      var examples = {};
      examples['application/json'] = [ {
    "city" : "Pompei",
    "latitude" : 40.849223,
    "name" : "Pompei Scavi",
    "stationId" : 801,
    "longitude" : 14.269264
  }, {
    "city" : "Pompei",
    "latitude" : 40.849223,
    "name" : "Pompei Scavi",
    "stationId" : 801,
    "longitude" : 14.269264
  } ];
      if (Object.keys(examples).length > 0) {
        resolve(examples[Object.keys(examples)[0]]);
      } else {
        resolve();
      }
    });
  }