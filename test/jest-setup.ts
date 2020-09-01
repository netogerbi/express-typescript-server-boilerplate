import ServerSetup from '@src/server';
import supertest from 'supertest';

beforeAll(() => {
  const server = new ServerSetup(5000);
  server.listen();
  global.testRequest = supertest(server.getApp());
});
