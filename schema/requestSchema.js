module.exports = {
    "listSchema" : {
        "type" : "object",
        "required" : ["page", "limit"],
        "properties" :{
            "page"  : {"type": "integer","minimum":1},
            "limit" : {"type": "integer","minimum":1}
        }
    },
}
