var Logger = require('../lib/index');
Logger.configure();
Logger.log("Log to console 1");
Logger.log("Log to console 2");

var fs = require('fs');
if (!fs.existsSync('logs')) {
	fs.mkdirSync('logs');
}
Logger.configure('log4js', {appender: { type: 'file', filename: 'logs/test.log', category: 'test'}});
Logger.log("Log to log4j 1");
Logger.log("Log to log4j 2");

Logger.configure('fluentd', {tag: 'performance', host: 'localhost', port: 24224, timeout: 3.0});
Logger.log({data:"logging to fluentd 1"});
Logger.log({data:"logging to fluentd 2"});