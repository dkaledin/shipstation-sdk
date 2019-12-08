"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var interfaces_1 = require("./interfaces");
var Shipstation = /** @class */ (function () {
    function Shipstation(apiKey, apiSecret, mode) {
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
        this.mode = mode;
    }
    Shipstation.prototype.makePostRequest = function (endPoint, body) {
        var baseUrl = this.getBaseUrl();
        var url = "" + baseUrl + endPoint;
        var authHeader = this.getAuthHeader();
        return axios_1.default.post(url, body, {
            headers: __assign(__assign({}, authHeader), { 'Content-Type': 'application/json' }),
        });
    };
    Shipstation.prototype.getBaseUrl = function () {
        if (this.mode === interfaces_1.Mode.Production) {
            return 'https://ssapi.shipstation.com/';
        }
        else if (this.mode === interfaces_1.Mode.Debug) {
            return 'https://private-anon-f3907bd0ce-shipstation.apiary-proxy.com/';
        }
        return 'https://private-anon-f3907bd0ce-shipstation.apiary-mock.com/';
    };
    Shipstation.prototype.getAuthHeader = function () {
        var data = this.apiKey + ":" + this.apiSecret;
        var bufferSize = Buffer.byteLength(data);
        var buffer = Buffer.alloc(bufferSize, data);
        var authToken = buffer.toString('base64');
        return {
            Authorization: "Basic " + authToken,
        };
    };
    return Shipstation;
}());
exports.Shipstation = Shipstation;
