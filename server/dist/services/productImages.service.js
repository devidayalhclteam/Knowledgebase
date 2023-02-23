"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const dbConfig_1 = require("../dbConfig");
const baseUrl = "https://devgurukulstorage.blob.core.windows.net/knowledebase/productImage/";
const getProductImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, e_1, _b, _c;
    console.log("req", req);
    let files = req;
    console.log("files", files);
    try {
        let data = [];
        try {
            for (var _d = true, _e = __asyncValues((0, dbConfig_1.clientWithSAS)("productImages").listEntities()), _f; _f = yield _e.next(), _a = _f.done, !_a;) {
                _c = _f.value;
                _d = false;
                try {
                    const entity = _c;
                    data.push(entity);
                }
                finally {
                    _d = true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = _e.return)) yield _b.call(_e);
            }
            finally { if (e_1) throw e_1.error; }
        }
        res.status(200).send({ status: constants_1.Status.SUCCESS, data });
    }
    catch (error) {
        res.status(500).send({ status: constants_1.Status.ERROR, error });
    }
});
const postProductImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("req", req);
        let files = req;
        console.log("files", files);
        try {
            const data = yield (0, dbConfig_1.clientWithSAS)("productImages").createEntity(req.body);
            res.status(200).send({ status: constants_1.Status.SUCCESS, data });
        }
        catch (error) {
            res.status(500).send({ status: constants_1.Status.ERROR, error });
        }
    }
    catch (error) {
        res.status(500).send({ status: constants_1.Status.ERROR, error });
    }
});
const deleteProductImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("req.body", req.body);
        const rowKey = req.body.rowKey; //req.body
        const data = yield (0, dbConfig_1.clientWithSAS)("productImages").deleteEntity("productImage", rowKey);
        res.status(200).send({ status: constants_1.Status.SUCCESS, data });
    }
    catch (error) {
        res.status(500).send({ status: constants_1.Status.ERROR, error });
    }
});
exports.default = { getProductImage, postProductImage, deleteProductImage };
