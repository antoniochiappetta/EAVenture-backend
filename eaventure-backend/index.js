const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const initialiseData = require('./sources/test-data/initial-data');
var cors = require('cors');

const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const PROJECT_NAME = 'eaventure-backend';

const prodDbUri = 'mongodb://localhost/eaventure-db-prod';
const devDbUri = 'mongodb://localhost/eaventure-db-dev';
const dbUri = process.env.NODE_ENV === 'production' ? prodDbUri : devDbUri;
const adapterConfig = { mongoUri: dbUri };

const UserSchema = require('./sources/schemas/User');
const TrainStop = require('./sources/schemas/TrainStop');
const InterestItem = require('./sources/schemas/InterestItem');
const InterestItemImage = require('./sources/schemas/InterestItemImage');
const SocialContent = require('./sources/schemas/SocialContent');
const BackOfficeAuthStrategy = require('./sources/authentication/BackOfficeAuthStrategy');
const ApiRouter = require('./sources/features/api/router');

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  onConnect: process.env.CREATE_TABLES !== 'true' && initialiseData,
});

keystone.createList('User', UserSchema);
keystone.createList('TrainStop', TrainStop);
keystone.createList('InterestItem', InterestItem);
keystone.createList('InterestItemImage', InterestItemImage);
keystone.createList('SocialContent', SocialContent);

const authStrategy = keystone.createAuthStrategy(BackOfficeAuthStrategy);

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      name: PROJECT_NAME,
      enableDefaultRoute: true,
      authStrategy,
    }),
  ],
  configureExpress: app => {
    app.use(cors());
    app.use('/api', ApiRouter);
  }
};
