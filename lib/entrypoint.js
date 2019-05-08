'use strict'

const { Api } = require('./api')
const errors = require('./errors')
const pkg = require('../package.json')

let config

function configure (options) {
  config = options
}

function create (provider) {
  if (!config) { throw new Error(`${pkg.name} must be configured`) }
  return new Api(config, provider)
}

module.exports = { configure, create, errors }