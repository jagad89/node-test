
module.exports.add = (a, b) => a + b;
module.exports.square = (x) => x * x;
module.exports.setName = (user,fullName) => {
    var nameParts = fullName.split(' ');
    user.firstName = nameParts[0];
    user.lastName = nameParts[1];
    return user;
};

module.exports.asyncAdd = (a,b,callback) => {
    setTimeout(()=>{
        callback(a + b);
    },1000);
};