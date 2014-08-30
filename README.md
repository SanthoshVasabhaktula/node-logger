node-logger
=========

An library providing utility method to log to either using log4js or fluentd

## Installation

  npm install git@github.com:SanthoshVasabhaktula/node-logger.git

## Usage

  var Logger = require('node-logger');

  # Log to console

  Logger.log("log to console");

  Logger.log({log: "log to console"}); // To log a json object

  # Log to log4js

  Logger.configure('log4js', {appender: { type: 'file', filename: 'logs/test.log', category: 'test'}});

  Logger.log("Log to log4j 1");

  # Log to fluentd

  Logger.configure('fluentd', {tag: 'performance', host: 'localhost', port: 24224, timeout: 3.0});
  
  Logger.log({data:"logging to fluentd 1"});


## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release