/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
fileReader = {};
(function () {
    fileReader.loadContent = function () {
        var content = readFile();
        var textArea = document.getElementById("contentId");
       
        textArea.innerHTML = content;
    };
    function readFile() {
        var request = new XMLHttpRequest();
        request.open('GET', 'http://services.groupkt.com/country/search?text=un', false);  // `false` makes the request synchronous
        request.send(null);
        if (request.status === 200) {
            return request.responseText;
        } else {
            return "";
        }
    }
})();

