const request = require('supertest');

const app = require('../../src/app');

describe('simple test', () => {
    it('should do something', async done => {
        const { status } = await request(app).get('/deutsch');

        expect(status).toBe(200);

        done();
    });
});
