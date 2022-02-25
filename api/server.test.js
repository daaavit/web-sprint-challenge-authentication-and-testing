// Write your tests here
const request = require('supertest')
const server = require('./server')
const db = require('../data/dbConfig')
const bcrypt = require('bcryptjs')
const jwtDecode =require('jwt-decode')


test('sanity', () => {
  expect(true).toBe(true)
})

//need write tests!!!