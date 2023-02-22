const app = require("../../app")
const request = require('supertest')

describe('login', ()=> {
    it("returns 200 if there is a username and password", async()=> {
        const res = await request(app).post('/api/user/login')

        expect(res.status).toEqual(200)
    })
})