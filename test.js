const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();
chai.use(chaiHttp);
let server = require('../index.js');

describe('GeT', () =>{
    it('should test git pages', (done) =>{
        chai.request(server).get('/').end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
})