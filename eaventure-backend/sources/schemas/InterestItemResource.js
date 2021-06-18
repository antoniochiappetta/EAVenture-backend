const { Url } = require('@keystonejs/fields');

module.exports = {
    fields: {
        lowResUrl: {
            type: Url,
            isRequired: true
        },
        highResUrl: {
            type: Url,
            isRequired: false
        },
    }
}
