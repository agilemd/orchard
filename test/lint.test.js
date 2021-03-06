/* eslint-disable global-require, import/no-extraneous-dependencies, strict */

'use strict';

require('eslint');

const lint = require('mocha-eslint');

const paths = [
  'index.js',
  'lib'
];

lint(paths, { formatter: 'compact' });
