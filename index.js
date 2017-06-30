const providers = require('./domain.json');

module.exports = class TemporaryEmailAddressValidator {
  static validate(email) {
    const email_domain = email.replace(/^[^@]*@/,'');
    return !providers.includes(email_domain);
  }
}
