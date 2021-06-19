const { Relationship, Text, Integer, DateTime } = require('@keystonejs/fields');

module.exports = {
    fields: {
        trainStop: {
            type: Relationship,
            ref: 'TrainStop',
            isRequired: true
        },
        sequence: {
            type: Integer,
            defaultValue: 1,
            adminDoc: 'Index of stop in the list of train stops for a ride',
            isRequired: true
        },
        arrivalTime: {
            type: DateTime,
            format: 'dd/MM/yyyy HH:mm O',
            adminDoc: 'Arrival time of the train to this stop during a ride, must be earlier than departureTime, unused for first stop of the ride',
            isRequired: false
        },
        departureTime: {
            type: DateTime,
            format: 'dd/MM/yyyy HH:mm O',
            adminDoc: 'Departure time of the train from this stop during a ride, must be later than arrivalTime, unused for last stop of the ride',
            isRequired: false
        }
    }
}