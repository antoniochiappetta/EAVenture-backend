const { Relationship, Text, Integer, DateTime, Url } = require('@keystonejs/fields');

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true
    },
    description: {
      type: Text,
      isRequired: true
    },
    stop: {
      type: Relationship,
      ref: 'TrainStop',
      isRequired: true
    },
    priceLevel: {
      type: Integer,
      defaultValue: 3,
      adminDoc: 'Price level of the event or attraction (from 1 to 5)',
      isRequired: false
    },
    eventDate: {
      type: DateTime,
      format: 'dd/MM/yyyy HH:mm O',
      adminDoc: 'Date and hour of the event',
      isRequired: false
    },
    rating: {
      type: Integer,
      defaultValue: 3,
      adminDoc: 'Rating of the item (from 1 to 5)',	   
      isRequired: false	    
    },
    images: {
      type: Url,
      isRequired: false	   
    },	 
  },
};
