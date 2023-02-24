"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __asyncValues =
  (this && this.__asyncValues) ||
  function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator],
      i;
    return m
      ? m.call(o)
      : ((o = typeof __values === "function" ? __values(o) : o[Symbol.iterator]()),
        (i = {}),
        verb("next"),
        verb("throw"),
        verb("return"),
        (i[Symbol.asyncIterator] = function () {
          return this;
        }),
        i);
    function verb(n) {
      i[n] =
        o[n] &&
        function (v) {
          return new Promise(function (resolve, reject) {
            (v = o[n](v)), settle(resolve, reject, v.done, v.value);
          });
        };
    }
    function settle(resolve, reject, d, v) {
      Promise.resolve(v).then(function (v) {
        resolve({ value: v, done: d });
      }, reject);
    }
  };
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const dbConfig_1 = require("../dbConfig");
const getCategories = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _a, e_1, _b, _c;
    try {
      let data = [];
      try {
        for (
          var _d = true, _e = __asyncValues(dbConfig_1.clientWithSAS.listEntities()), _f;
          (_f = yield _e.next()), (_a = _f.done), !_a;

        ) {
          _c = _f.value;
          _d = false;
          try {
            const entity = _c;
            data.push(entity);
          } finally {
            _d = true;
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (!_d && !_a && (_b = _e.return)) yield _b.call(_e);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      res.status(200).send({ status: constants_1.Status.SUCCESS, data });
    } catch (error) {
      res.status(500).send({ status: constants_1.Status.ERROR, error });
    }
  });
const postCategory = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      // const data = await clientWithSAS("categories").createEntity(req.body);
      // res.status(200).send({ status: Status.SUCCESS, data });
    } catch (error) {
      res.status(500).send({ status: constants_1.Status.ERROR, error });
    }
  });
const deleteCategory = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      // const rowKey = "a4319198-507b-4dc1-ac3c-121013925993"
      // const data = await clientWithSAS("categories").deleteEntity(
      //     "category",
      //     rowKey
      // );
      // res.status(200).send({ status: Status.SUCCESS, data });
    } catch (error) {
      res.status(500).send({ status: constants_1.Status.ERROR, error });
    }
  });
exports.default = { getCategories, postCategory, deleteCategory };
