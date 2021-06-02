"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var H1 = styled_components_1.default.h1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    font-size: 50px;\n    text-align: center;\n"], ["\n    font-size: 50px;\n    text-align: center;\n"])));
var Heading = function (props) {
    return react_1.default.createElement(H1, null, props.children);
};
exports.default = Heading;
var templateObject_1;
