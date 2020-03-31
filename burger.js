// Import the ORM
var orm = require("../config/orm.js");

// create burger 
var burger = {
	
	selectFunction: function(cb) {
		orm.selectFunction('burgers', function(res) {
			cb(res);
		});
	},
	


	insertCol: function(cols, vals, cb) {
		orm.insertCol('burgers', cols, vals, function(res) {
			cb(res);
		});
	},
	


	updateCol: function(objColVals, condition, cb) {
		orm.updateCol('burgers', objColVals, condition, function(res) {
			cb(res);
		});
	}
};

// Export 
module.exports = burger;