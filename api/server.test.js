// Write your tests here
const request = require('supertest')
const server = require('./server')
const bcrypt = require('bcryptjs')
const jwtDecode =require('jwt-decode')


test('sanity', () => {
  expect(true).toBe(true)
})

describe('server.js', () => {
  test('[1] respondes with the correct message on valid credentials', async () => {
    const res = await requres(server).post('/api/auth/login').send({username: 'davit', password: 'khuts'})
    expect(res.body.message).toMatch('/welomce davit/i');
  }, 500)
})