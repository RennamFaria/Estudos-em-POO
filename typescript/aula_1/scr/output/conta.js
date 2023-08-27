"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
var Conta = /** @class */ (function () {
    function Conta(numero, dono) {
        this._saldo = 0.0;
        this.numero = numero;
        this.dono = dono;
    }
    Conta.prototype.credita = function (quantia) {
        this._saldo += quantia;
    };
    Conta.prototype.debita = function (quantia) {
        this._saldo -= quantia;
    };
    Object.defineProperty(Conta.prototype, "saldo", {
        get: function () {
            return this._saldo;
        },
        set: function (saldo) {
            if (saldo >= 0)
                this._saldo = saldo;
        },
        enumerable: false,
        configurable: true
    });
    return Conta;
}());
exports.Conta = Conta;
