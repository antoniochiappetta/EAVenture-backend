const { PasswordAuthStrategy } = require('@keystonejs/auth-password');

module.exports = {
    type: PasswordAuthStrategy,
    list: 'User',
    config: { protectIdentities: process.env.NODE_ENV === 'production' },
}