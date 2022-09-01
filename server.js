const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080')
});

app.get('/book', function(요청, 응답){
    응답.send('책을 구매할 수 있는 사이트입니다.');
});

app.get('/pet', function(요청, 응답){
    git응답.send('고양이 용품을 구매할 수 있는 사이트입니다.');
});