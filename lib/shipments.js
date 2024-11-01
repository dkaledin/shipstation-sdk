"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shipments = void 0;
var shipstation_1 = require("./shipstation");
var Shipments = /** @class */ (function (_super) {
    __extends(Shipments, _super);
    function Shipments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Shipments.prototype.createShipmentLabel = function (params) {
        return this.makePostRequest('shipments/createlabel', params);
    };
    Shipments.prototype.voidShipmentLabel = function (params) {
        return this.makePostRequest('/shipments/voidlabel', params);
    };
    Shipments.prototype.getShipmentsRates = function (params) {
        return this.makePostRequest('/shipments/getrates', params);
    };
    return Shipments;
}(shipstation_1.Shipstation));
exports.Shipments = Shipments;
