/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Book = {};
(function () {
    Book.populate = function () {
        var bookId = document.getElementById("ID").value;
        populateBookDetail(bookId);
    };
    Book.update = function () {
        var bookId = document.getElementById("ID").value;
        var inputs = document.getElementById("myForm").getElementsByTagName('input');
        var data = {};
        for (i = 0; i < inputs.length; i++) {
            if (inputs[i].name === 'PublishDate') {
                data[inputs[i].name] = inputs[i].valueAsDate;
            } else {
                data[inputs[i].name] = inputs[i].value;
            }
        }
        ajax("http://fakerestapi.azurewebsites.net/api/Books/"+bookId, "PUT", data, function (response) {
            console.log(response);
            setSucessMessage(response);
        });
    };
    function ajax(url, method, data, callback) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open(method, url, true);
        xmlHttp.setRequestHeader("Content-type", "application/json");
        xmlHttp.setRequestHeader("Accept", "application/json");
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                callback(xmlHttp.responseText);
            }
        };
        xmlHttp.onerror = function (e) {
            setErrorMessage(e);
        };
        var request = JSON.stringify(data);
        xmlHttp.send(request);
    }
    function populateBookDetail(bookId) {
        ajax("http://fakerestapi.azurewebsites.net/api/Books/" + bookId, "GET", null, function (response) {
            var data = JSON.parse(response);
            var inputs = document.getElementById("myForm").getElementsByTagName('input');
            for (i = 0; i < inputs.length; i++) {
                if (inputs[i].name === 'PublishDate') {
                    var date = new Date(data[inputs[i].name]);
                    var currentDate = date.toISOString().slice(0, 10);
                    inputs[i].value = currentDate;
                } else if (inputs[i].name === 'PageCount') {
                    inputs[i].value = data[inputs[i].name];
                } else {
                    inputs[i].value = data[inputs[i].name];
                }
            }
        });
    }
    function setSucessMessage(message) {
        var messageElm = document.getElementById("message");
        messageElm.className = "success";
        messageElm.innerHTML = "save succes fully::" + message;
    }
    function setErrorMessage(message) {
        var messageElm = document.getElementById("message");
        messageElm.className = "error";
        messageElm.innerHTML = "error in save::" + message;
    }
})();