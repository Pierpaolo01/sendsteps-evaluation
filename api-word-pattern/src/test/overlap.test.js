const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../app.js');

chai.use(chaiHttp);
const should = chai.should();


const assertion = (word1, word2, equals) => {
    chai.request(app)
        .post("/api/word-overlap")
        .send({word1, word2})
        .end((err, res) => {
            console.log(res.body)
            res.should.have.status(200);
            res.body.should.be.a('array');
            res.body.should.be.eql(equals.split(""))
        });
}

describe("tests correct overlaps", () => {
    it("ice + device should return ice", () => {
        assertion("ice", "device", "ice");
    });

    it("device + ice should return ice", () => {
        assertion("device", "ice", "ice");
    });

    it("intercities + ice should return ice", () => {
        assertion("intercities", "ice", "ice");
    });

    it("ice + intercities should return ice", () => {
        assertion("ice", "intercities", "ice");
    });

    it("client + ice should return ie", () => {
        assertion("client", "ice", "ie");
    });

    it("ice + client should return ce", () => {
        assertion("ice", "client", "ce");
    });

    it("orange + rhinoceros should return rne", () => {
        assertion("orange", "rhinoceros", "rne");
    });

    it("rhinoceros + orange should return rne", () => {
        assertion("rhinoceros", "orange", "rne");
    });

});
