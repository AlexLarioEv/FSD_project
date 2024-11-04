const firstCharUpperCase = require('../firstCharUpperCase');

module.exports = (sliceName) => `export type T${firstCharUpperCase(sliceName)}Schema = {
    
}`;
