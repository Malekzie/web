const isValidEmail = (email) => {
     return /.+@.+/.test(email);
}

module.exports = isValidEmail;