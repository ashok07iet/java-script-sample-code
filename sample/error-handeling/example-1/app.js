/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var validator = {};
(function () {
    validator.validate = function () {
        var message, x;
        message = document.getElementById("message");
        message.innerHTML = "";
        x = document.getElementById("demo").value;
        try {
            if (x === "")
                throw "empty";
            if (isNaN(x))
                throw "not a number";
            x = Number(x);
            if (x < 5)
                throw "too low";
            if (x > 10)
                throw "too high";
        } catch (err) {
            message.innerHTML = "Input is " + err;
        }
    };
})();

