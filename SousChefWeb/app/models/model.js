var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
	name: String,
	password: String,
	phoneNum: Number,
	email: String,
	addressLine1: String,
	addressLine2: String,
	city: String,
	zipCd: String,
	state: String,
    pic: String
});


mongoose.model('User', userSchema);