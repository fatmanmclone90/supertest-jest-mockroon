const request = require('supertest');

describe('Space test suite', () => {
    // can this come from configuration or a fixture?
    let req = request("http://localhost:3000"); 
    it('tests /channels endpoints', async() => {
        const response = await req
            .get('/channels')
            .set('Accept', 'application/json')
        expect(typeof response.body.code).toBe('number')
        expect(response.headers["content-type"]).toBe("application/json; charset=utf-8");
    });
});