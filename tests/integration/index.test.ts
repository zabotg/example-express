import server from '../../src/server';
import {expect} from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp)

describe('Integration index tests', () => {
    it("Should return a sum of two numbers and ok status", () => {
        chai.request(server)
        .post('/sum-two-numbers')
        .send({ firstNumber: 123, secondNumber: 124 })
        .end(function (err, res) {
           expect(err).to.be.null;
           expect(res).to.have.status(200);
           expect(res.text).to.be.equal('247')
        });
    });

    it("Should return an error 400 if the parameters is wrong!", () => {
        chai.request(server)
        .post('/sum-two-numbers')
        .send({ wrongParameter: '123', secondNumber: '123' })
        .end(function (err, res) {
           expect(err).to.be.null;
           expect(res).to.have.status(400);
           expect(res.text).to.be.equal('Wrong body parameters!');
        });
    });
});


