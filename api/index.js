const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const router = express.Router();
const jsonParser = bodyParser.json();
const jsonValidator = require('../lib/validator/jsonValidator');     
const requestSchema = require('../schema/requestSchema'); 
const paginator 	= require('../lib/pagination/paginator');


//List; display list with pagination
router.post('/list', jsonParser, async function(req, res, next) {
	try {
		let input_valid = await jsonValidator.validateJSON(requestSchema.listSchema,req.body);
        let data = await paginator.paginate(input_valid.page, input_valid.limit);
        var respOutput ={
            'responseCode' 		: 200,
            'responseMessage'   : 'Success',
            'responseData'	    : data
        }
		res.status(200).json(respOutput);
	} catch (error) {
        var respOutput ={
            'responseCode' 		: error.errorCode,
            'responseMessage'   : error.errorMsg
        }
		res.status(error.errorResp).json(respOutput);
	}
	return;
});

//get banner data
router.get('/banner', async function(req, res, next) {
	try {
        var dir = 'img/';
		var filenames = fs.readdirSync(dir);
        var data=[];
        filenames.forEach(file => {
            var obj = {  
                "filename":file,
                "url":req.headers.host+"/"+dir+file
            };
            data.push(obj);
        });
        var respOutput ={
            'responseCode' 		: 200,
            'responseMessage'   : 'Success',
            'responseData'	    : data
        }
		res.status(200).json(respOutput);
	} catch (error) {
		console.log(error);
		res.status(error.errorResp).json(await limitHelpers.responseMapping(error.errorCode,error.errorMsg));
	}
	return;
});


module.exports = router;