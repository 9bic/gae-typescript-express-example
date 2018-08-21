import * as Request from 'supertest';
import App from '../src/index';

const request = Request(App);

describe('/', () => {

  it('GET /', async() => {
    const response = await request.get('/');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('GAE is awesome!');
  })

  it('GET /:name', async()=> {
    const response = await request.get('/aws');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('aws is awesome!');
  })

  it('POST /', async() => {
    const response =  await request.post('/').send({ name: 'azure' });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('azure is awesome!');
  })
})