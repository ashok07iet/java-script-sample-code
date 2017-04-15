/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Book = {};
(function () {
    Book.createBook = function () {
        var inputs = document.getElementById("myForm").getElementsByTagName('input');
        var data = {};
        for (i = 0; i < inputs.length; i++) {
            if(inputs[i].name==='PublishDate'){
                data[inputs[i].name] = inputs[i].valueAsDate;
            }else{
            data[inputs[i].name] = inputs[i].value;
        }
        }
        ajax(data, function (response) {
            console.log(response);
            setSucessMessage(response);
        });
    };
    function ajax(data, callback) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("POST", "http://fakerestapi.azurewebsites.net/api/Books", true);
        xmlHttp.setRequestHeader("Content-type", "application/json");
        xmlHttp.setRequestHeader("Accept", "application/json");
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                callback(xmlHttp.responseText);
            }else{
                setErrorMessage(xmlHttp.status);
            }
        };
        xmlHttp.onerror=function(e){
            setErrorMessage(e);
        };
        var request = JSON.stringify(data);
        xmlHttp.send(request);
    }
    function setSucessMessage(message){
      var messageElm=document.getElementById("message");
      messageElm.className="success";
      messageElm.innerHTML="save succes fully::"+message;
    }
    function setErrorMessage(message){
      var messageElm=document.getElementById("message");
      messageElm.className="error";
      messageElm.innerHTML="error in save::"+message;
    }
})();