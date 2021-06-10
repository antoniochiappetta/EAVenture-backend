const { Text, DateTime } = require('@keystonejs/fields');

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
    city: {
      type: Text,
      isRequired: true,
    },
    address: {
      type: Text,
      isRequired: true
    },
    time: {
      type: DateTime,
      format: 'dd/MM/yyyy HH:mm O',
      isRequired: true
    },
  },
};
