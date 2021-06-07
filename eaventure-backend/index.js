const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const initialiseData = require('./sources/test-data/initial-data');

const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const PROJECT_NAME = 'eaventure-backend';
const adapterConfig = { mongoUri: 'mongodb://localhost/eaventure-db' };

const UserSchema = require('./sources/schemas/User');
const BackOfficeAuthStrategy = require('./sources/authentication/BackOfficeAuthStrategy');

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  onConnect: process.env.CREATE_TABLES !== 'true' && initialiseData,
});

keystone.createList('User', UserSchema);

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
};
