var Ajv = require('ajv');
var ajv = new Ajv({allErrors: true});


module.exports.validateJSON = function(jsonSchema, jsonInput) {
    return new Promise(function(resolve, reject) {
        let validate = ajv.compile(jsonSchema);
        let valid = ajv.validate(jsonSchema,jsonInput);
        if (valid){
            resolve(jsonInput);
        }else{
            reject({'errorResp': 400, 'errorCode': '400','errorMsg': ajv.errorsText(validate.errors)});
        }
    });
}