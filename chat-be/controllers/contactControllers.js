const Contact = require("../models/Contacts.js");
const auth = require("../auth.js");
const User = require("../models/User.js");

module.exports.addToContact = async (request, response) => {
    const userData = auth.decode(request.headers.authorization)

    const newContact = new Contact({
        userId : userData.id,
        contactUserId: request.body.contactId
    })

    return await newContact.save().then((user, err) => {
        if (err) response.send(err);

        response.send(user);
    });
}

module.exports.checkIfContactExists = (request, response) => {
    const userData = auth.decode(request.headers.authorization)

    Contact.find({userId: userData.id, contactUserId: request.params.contactId}).then(
        result => {
            if(result.length > 0){
                return response.send(false);
            }
            else{
                return	response.send(true);
            }
        }
    ).catch(error => response.send(500))
}

