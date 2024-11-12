function user_request(url, requestMethod, body) {
    let bodyOK = requestMethod === 'GET' ? null : body;
    let modeOk =  requestMethod === 'GET' ? null : 'no-cors';
    
    fetch(url, {
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods':'GET,POST,PUT,PATCH,DELETE',
        },
        method: requestMethod,
        body: bodyOK,
    })
        .then(function (res) {
            let response ;
            try{
                response = res.json();
            }
            catch(e){
                response = res.text();
            }
            return response;
            
        })
        .then(function (data) {
            document.getElementById('response_output').value = JSON.stringify(data, null, 4);    // stringify with 4 spaces at each level
        })
        

}