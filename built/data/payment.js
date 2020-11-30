"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
class Payment {
    constructor(zipCode = "70000") {
        this._email = "";
        this._cardNumber = "";
        this._mm = "";
        this._yy = "";
        this._cvc = "";
        this._zipc = "";
        this.setDefaultValues(zipCode);
    }
    setDefaultValues(zipCode) {
        this._email = "testing@gmail.com";
        this._cardNumber = "5555 5555 5555 4444";
        this._mm = "01";
        this._yy = "25";
        this._cvc = "123";
        this._zipc = zipCode;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get cardNumber() {
        return this._cardNumber;
    }
    set cardNumber(value) {
        this._cardNumber = value;
    }
    get month() {
        return this._mm;
    }
    set month(value) {
        this._mm = value;
    }
    get year() {
        return this._yy;
    }
    set year(value) {
        this._yy = value;
    }
    get cvc() {
        return this._cvc;
    }
    set cvc(value) {
        this._cvc = value;
    }
    get zipCode() {
        return this._zipc;
    }
    set zipCode(value) {
        this._zipc = value;
    }
}
exports.Payment = Payment;
//# sourceMappingURL=payment.js.map