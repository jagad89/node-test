const request = require('supertest');

const app = require('./server').app;

it('should return hello world',(done)=>{
    request(app)
    .get('/')
    .expect('Hello World')
    .end(done());
});
