/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
fileReader = {};
(function () {
    fileReader.loadContent = function () {
        readFile(function (response) {
            var textArea = document.getElementById("contentId");
            textArea.innerHTML = response;
        });
    };
    function readFile(callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://services.groupkt.com/country/search?text=un', true);  // `false` makes the request synchronous
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

