/*
 * Copyright (c) 2013-2014 Canopus Consulting. All rights reserved.
 *
 * This code is intellectual property of Canopus Consulting. The intellectual and technical
 * concepts contained herein may be covered by patents, patents in process, and are protected
 * by trade secret or copyright law. Any unauthorized use of this code without prior approval
 * from Canopus Consulting is prohibited.
 */

/**
 * Util class for orchestrator logger
 *
 * @author Santhosh
 */

var logger;
var loggerType = 'console';

module.exports = {
	/**
	 * [configure description]
	 * @param  String type - Logger type. Supported values are log4js, fluentd or console
	 * @param  Object options - Options to configure the logger
	 */
  	configure: function(type, options) {
    	if(type == 'fluentd') {
    		loggerType = type;
			logger = require('fluent-logger');
			logger.configure(options.tag, {
			   host: options.host,
			   port: options.port,
			   timeout: options.timeout
			});
		} else if(type == 'log4js') {
			loggerType = type;
			var log4js = require('log4js');
			log4js.configure({
			  	appenders: [
				    options.appender
			  	]
			});
			logger = log4js.getLogger(options.appender.category);
		}
  	},

  	/**
  	 * [log description]
  	 * @param  {[type]} json [description]
  	 * @return {[type]}      [description]
  	 */
  	log: function(json) {
  		if(loggerType == 'fluentd') {
			logger.emit('log', json);
		} else if(loggerType == 'log4js') {
			logger.debug(JSON.stringify(json));
		} else if(loggerType == 'console') {
			console.log(json);
		} else {
			//do nothing.
		}
  	}
};