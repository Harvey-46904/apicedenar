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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarArea = exports.deleteArea = exports.updateArea = exports.createArea = exports.getArea = exports.getAreas = void 0;
var area_service_1 = __importDefault(require("../servicios/area.service"));
var constans_1 = require("../config/constans");
var __areaSvr = new area_service_1.default();
var getAreas = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, __areaSvr.getAreas()];
            case 1:
                result = _a.sent();
                return [2 /*return*/, res.json({
                        status: 0,
                        msj: "Areas Cargadas Correctamente",
                        data: result,
                    })];
            case 2:
                error_1 = _a.sent();
                console.log(error_1);
                return [2 /*return*/, res.status(500).json({ msj: constans_1.errorServer })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAreas = getAreas;
var getArea = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, result, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, __areaSvr.getArea(Number(id))];
            case 1:
                result = _a.sent();
                return [2 /*return*/, res.json({
                        status: 0,
                        msj: "Area Cargada Correctamente",
                        data: result,
                    })];
            case 2:
                error_2 = _a.sent();
                return [2 /*return*/, res.status(500).json({ msj: constans_1.errorServer })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getArea = getArea;
var createArea = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newArea, result, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                newArea = req.body;
                return [4 /*yield*/, __areaSvr.createArea(newArea)];
            case 1:
                result = _a.sent();
                return [2 /*return*/, res.json({
                        status: 0,
                        msj: "Area Creada Correctamente",
                        data: result,
                    })];
            case 2:
                error_3 = _a.sent();
                return [2 /*return*/, res.status(500).json({ msj: constans_1.errorServer })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createArea = createArea;
var updateArea = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, updateArea_1, result, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                updateArea_1 = req.body;
                updateArea_1.id = Number(id);
                return [4 /*yield*/, __areaSvr.updateArea(updateArea_1)];
            case 1:
                result = _a.sent();
                return [2 /*return*/, res.json({
                        status: 0,
                        msj: "Areas actualizada Correctamente",
                        data: result,
                    })];
            case 2:
                error_4 = _a.sent();
                return [2 /*return*/, res.status(500).json({ msj: constans_1.errorServer })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateArea = updateArea;
var deleteArea = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, result, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, __areaSvr.deleteArea(Number(id))];
            case 1:
                result = _a.sent();
                return [2 /*return*/, res.json({
                        status: 0,
                        msj: "Area eliminada Correctamente",
                        data: result,
                    })];
            case 2:
                error_5 = _a.sent();
                console.log(error_5);
                return [2 /*return*/, res.status(500).json({ msj: constans_1.errorServer })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteArea = deleteArea;
var buscarArea = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var termino;
    return __generator(this, function (_a) {
        try {
            termino = req.params.termino;
            //const result = await __areaSvr.buscarArea(termino);
            return [2 /*return*/, res.json({
                    status: 0,
                    msj: "Busqueda correcta",
                    termino: termino,
                })];
        }
        catch (error) {
            return [2 /*return*/, res.status(500).json({ msj: constans_1.errorServer })];
        }
        return [2 /*return*/];
    });
}); };
exports.buscarArea = buscarArea;
//# sourceMappingURL=area.controller.js.map