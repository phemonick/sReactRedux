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

var CreateGame = function () {
    function CreateGame() {
        _classCallCheck(this, CreateGame);
    }

    _createClass(CreateGame, null, [{
        key: 'create',
        value: function create(req, res) {
            var title = req.body.title;

            game.create({
                title: title
            }).then(function (game) {
                return res.status(200).send({
                    message: game
                });
            });
        }
    }]);

    return CreateGame;
}();

exports.default = CreateGame;