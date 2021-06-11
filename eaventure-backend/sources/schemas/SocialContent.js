
const { Relationship, Text, Url } = require('@keystonejs/fields');

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true		    
    },	  
    platform: {
      type: Text,
      adminDoc: 'Social content platform or website',	    
      isRequired: true
    },
    stop: {
      type: Relationship,
      ref: 'TrainStop',	   
      isRequired: true
    },
    url: {
      type: Url,
      isRequired: true
    },
  },
};
