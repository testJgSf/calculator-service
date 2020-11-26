const request = require('supertest');
const app = require('../app');
const axios = require('axios');
let MockAdapter = require('axios-mock-adapter');
let mock;
const {sumResponse, subResponse, mulResponse, divResponse} = require('./responses/OkResponses');

beforeEach(() => {
    process.env.URL_MULT= "https://test.com/multiply";
    process.env.URL_DIV= "https://test.com/divide";
    process.env.URL_SUM= "https://test.com/sum";
    process.env.URL_SUB= "https://test.com/subtract";
    mock = new MockAdapter(axios);
    mock.onPost('https://test.com/multiply').reply(200, mulResponse);
    mock.onPost('https://test.com/divide').reply(200, divResponse);
    mock.onPost('https://test.com/sum').reply(200, sumResponse);
    mock.onPost('https://test.com/subtract').reply(200, subResponse);
});

describe('POST /calculate ',  () => {
    it('respond with 200 sum',  (done) => {
        request(app)
            .post('/calculate')
            .send({
                    "operations": ["2+2"]
                })
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    }, 45000);
});


describe('POST /calculate ',  () => {
    it('respond with 200 subtract',  (done) => {
        request(app)
            .post('/calculate')
            .send({
                "operations": ["4-2"]
            })
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    }, 45000);
});



describe('POST /calculate ',  () => {
    it('respond with 200 multiply',  (done) => {
        request(app)
            .post('/calculate')
            .send({
                "operations": ["2*2"]
            })
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    }, 45000);
});

describe('POST /calculate ',  () => {
    it('respond with 200 divide',  (done) => {
        request(app)
            .post('/calculate')
            .send({
                "operations": ["4/2"]
            })
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    }, 45000);
});

describe('POST /calculate ',  () => {
    it('respond with 400',  (done) => {
        request(app)
            .post('/calculate')
            .send({
                "operations": ["*4/2"]
            })
            .set('Accept', 'application/json')
            .expect(400)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    }, 45000);
});