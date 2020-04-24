import dotenv from 'dotenv';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';
import 'reflect-metadata'; //necessary for aws-dynamodb-data-mapper

dotenv.config({
  path: '.env.test',
});

chai.use(chaiAsPromised);
chai.use(sinonChai);
