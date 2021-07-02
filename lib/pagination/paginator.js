module.exports.paginate = function(page, limit) {
    return new Promise(function(resolve,reject) {
        let source = require('../../indonesian_cities.json');
        var maxLength = source.length-1;
        var maxPage = Math.ceil(maxLength / limit);
        var obj = {  
            "page":page,
            "maxPage":maxPage,           
            data: []
        };
        if(page==1){
            var start = 0;
        }else{
            var start = (page-1)*limit;
        }
        var end = start+limit;
        if(page > maxPage){
            reject({'errorResp': 404, 'errorCode': '404','errorMsg': 'page not found, max page: '+maxPage});
        }else{
            for (x = start; x < end; x++) {
                if(x <= maxLength){
                    obj.data.push(source[x]);
                }
            }
            resolve(obj);
        }
    });
}