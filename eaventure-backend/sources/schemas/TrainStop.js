const { Text, Integer, Float, DateTime } = require('@keystonejs/fields');

module.exports = {
  fields: {
    stationId: {
      type: Integer,
      isUnique: true,	    
      isRequired: true
    },
    name: {
      type: Text,
      isUnique: true,	    
      isRequired: true
    },
    city: {
      type: Text,
      isRequired: true
    },
    latitude: {
      type: Float,
      isRequired: true
    },
    longitude: {
      type: Float,
      isRequired: true
    }
  },
};
