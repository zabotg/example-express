import server from '../../src/server';
import {expect} from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp)

describe('Integration index tests', () => {
    it("Should return a sum of two numbers and ok status", () => {
        chai.request(server)
        .get('/')
        .end(function (err, res) {
           expect(err).to.be.null;
           expect(res).to.have.status(200);
           expect(res.text).to.be.equal('Hello ts-node!')
        });
    });
});


