const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const auth = require("../auth.js");
const methods = require("../__methods.js");

module.exports.signUp = async (request, response) => {
    let newUser = new User({
        name: request.body.name,
        password: bcrypt.hashSync(request.body.password, 10),
        username: request.body.username,
        mobile: request.body.mobile,
        dateJoined: methods.getCurrentDate()
    });

    return await newUser.save().then((user, err) => {
        if (err) response.send(err);

        response.send(user);
    });
}

module.exports.checkUsernameAvailability = (request, response) =>{
	return User.find({username: request.body.username}).then(result =>{
		console.log(result);

		if(result.length > 0){
			return response.send(false);
		}
		else{
			return	response.send(true);
		}
	})
	.catch(error => response.send(error));
}