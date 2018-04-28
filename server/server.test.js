const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

describe('Server', () => {
    describe('Get /', () => {
        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(200)
                //.expect('Hello World!')
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 1001
                    })
                })
                .end(done);
        });
    });
    describe('Get /user', () => {
        it('should return user John with age 30 in response', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'John',
                        age: 30
                    })
                })
                .end(done);
        });
    });
});