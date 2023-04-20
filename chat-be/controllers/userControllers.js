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

module.exports.logIn = (request, response) => {
    return User.findOne({username: request.body.username}).then(
        result => {
            if (result == null) {response.send(false)}
            else {
                const isPasswordCorrect = bcrypt.compareSync(request.body.password, result.password);
                if(isPasswordCorrect) {
                    response.send({access: auth.createAccessToken(result)});
                } else {
                    response.send(false);
                }
            }
        }
    )
} 

module.exports.getAllUsers = (request, response) => {

    return User.find({}).then((result, error) => {
        if (error) {
            response.send(500);
        } else {
            response.send(result);
        }
    });
}

