const data_helper = require("../../lib/data_helper");
const readData = data_helper.read;




createUser = (callback) => {


}
getUser = (info, callback) => {

    const key = info.query.handler_method;
    readData("userdata", "userdata", callback);


}

updateUser = (callback) => {
    callback(200, { message: "User updating route called" });
}

deleteUser = (callback) => {

    callback(200, { message: "User deleting route called" });

}

const helper = {
    GET: getUser,
    POST: createUser,
    PUT: updateUser,
    DELETE: deleteUser
}

userRouteHandler = (info, callback) => {

    const requested_method = info.method;
    const accepted_methods = ["GET", "POST", "PUT", "DELETE"];
    if (accepted_methods.indexOf(requested_method) > -1) {
        const handler_method = helper[requested_method];
        handler_method(info, callback);

    }
    else {
        callback(404, { message: "Invalid Request" });
    }
}

module.exports = userRouteHandler;










