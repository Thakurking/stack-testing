const chai = require("chai");
const assert = require("assert");
const should = chai.should;
const expect = chai.expect;

let chaiHttp = require("chai-http");
chai.use(chaiHttp);

const server = require("../server");

describe("display api", function () {
  it("stack display api", function (done) {
    chai
      .request(server)
      .get('/stack/display')
      .end((err, response) => {
        expect(response.status).to.be.equal(200);
        expect(response.body).to.have.all.keys("message", "status");
        done();
      });
  });
});
