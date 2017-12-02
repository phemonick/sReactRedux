'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var game = _models2.default.Games;

var GetGames = function () {
    function GetGames() {
        _classCallCheck(this, GetGames);
    }

    _createClass(GetGames, null, [{
        key: 'get',
        value: function get(req, res) {
            game.all().then(function (games) {
                return res.status(200).send({ games: games });
            }).catch(function (error) {
                return res.status(200).send(error);
            });
        }
    }]);

    return GetGames;
}();

exports.default = GetGames;