require('dotenv').config();

// const path = require('path');
// /** @type {import('next').NextConfig} */

module.exports = {
  webpack: (config) => {
    config.resolve.preferRelative = true;
    return config;
  },
};