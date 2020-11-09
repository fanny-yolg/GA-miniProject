const jwt = require('jsonwebtoken')
const secretKey = process.env.SECRET_KEY

const tokenGenerator = (user) => {
    const { id} = user

    return jwt.sign({
        id,
        // email,
    }, secretKey)
}

const tokenVerifier = (access_token) => {
    return jwt.verify(access_token, secretKey)
}

module.exports = {
    tokenGenerator, tokenVerifier
}
