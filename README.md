# Infomedia
pastikan sudah terinstall node js. buka cmd dan arahkan ke root folder API ini, jalankan dengan mengetik
```bash
node app.js
```
API akan jalan di port 8081

silahkan refer ke postman collection file (Infomedia.postman_collection.json)

## LIST
- endpoint: http://127.0.0.1:8081/request/list
- method: POST
- request body:
```
page [integer, required, minimum:1]
limit [integer, required, minimum:1]
```
- response:
```
responseCode [200,400,404]
responseMessage
responseData [
    -page
    -maxPage
    -data
]
```


## Banner
- endpoint: http://127.0.0.1:8081/request/banner
- response:
```
responseCode [200,400,404]
responseMessage
responseData [
    -fileName
    -url
]
```
