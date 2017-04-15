/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
http = {};
(function () {
    var numOfRows;
    http.getUser = function () {
        clean();
        ajax(function (response) {
            var users = JSON.parse(response).data;
            numOfRows=users.length;
            for (i = 1; i <= users.length; i++) {
                var user = users[i - 1];
                var table = document.getElementById("myTable");
                var row = table.insertRow(i);
                var id = row.insertCell(0);
                var firstname = row.insertCell(1);
                var lastName = row.insertCell(2);
                var avatar = row.insertCell(3);
                id.innerHTML = user.id;
                firstname.innerHTML = user.first_name;
                lastName.innerHTML = user.last_name;
                avatar.innerHTML = user.avatar;
            }
        });
    };
    function clean(){
         var table = document.getElementById("myTable");
        for(i=numOfRows;i>0;i--){
             table.deleteRow(i);
        }
    }
    function ajax(callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://reqres.in/api/users', true);  // `false` makes the request synchronous
        xhr.onload = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    callback(xhr.responseText);
                } else {
                    console.error(xhr.statusText);
                }
            }
        };
        xhr.onerror = function (e) {
            console.error(xhr.statusText);
        };
        xhr.send(null);
    }
})();

