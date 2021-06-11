
const { Relationship, Text } = require('@keystonejs/fields');

module.exports = {
  fields: {
    name: {
      type: Text,
      adminDoc: 'This is the TRAIN NUMBER',
      isUnique: true,	    
      isRequired: true
    },
    startingStop: {
      type: Relationship,
      ref: 'TrainStop',	   
      isRequired: true
    },
    finalStop: {
      type: Relationship,
      ref: 'TrainStop',
      isRequired: true
    },
    intermediateStops: {
      type: Relationship,
      ref: 'TrainStop',
      many: true,	    
      isRequired: true
    },
    interestItems: {
      type: Relationship,
      ref: 'InterestItem',
      many: true,	    
      isRequired: true
    },
    socialContens: {
      type: Relationship,
      ref: 'SocialContent',
      many: true,	    
      isRequired: true	    
    },
  },
};
