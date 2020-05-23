"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Monster = function () {
    function Monster(type, color, element, maxHP) {
        _classCallCheck(this, Monster);

        this.type = type;
        this.color = color;
        this.element = element;
        this.maxHP = maxHP;
        this.isScary = true;
    }

    _createClass(Monster, [{
        key: "attack",
        value: function attack() {
            console.log("The " + this.color + " " + this.type + " deals some damage!");
        }
    }]);

    return Monster;
}();

attack();
//# sourceMappingURL=newscript.js.map