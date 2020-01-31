"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
exports.CanvasScaleDefault = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  background-size: 20px 20px;\n  background-color: rgba(0,0,0,0.08);\n  background-image:\n    linear-gradient(90deg,hsla(0,0%,100%,.2) 1px,transparent 0),\n    linear-gradient(180deg,hsla(0,0%,100%,.2) 1px,transparent 0);\n  transform-origin: top left;\n  ", "\n"], ["\n  position: relative;\n  background-size: 20px 20px;\n  background-color: rgba(0,0,0,0.08);\n  background-image:\n    linear-gradient(90deg,hsla(0,0%,100%,.2) 1px,transparent 0),\n    linear-gradient(180deg,hsla(0,0%,100%,.2) 1px,transparent 0);\n  transform-origin: top left;\n  ",
    "\n"])), function (props) { return props.scale && styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    transform: scale(", ")\n  "], ["\n    transform: scale(", ")\n  "])), props.scale); });
var templateObject_1, templateObject_2;
//# sourceMappingURL=CanvasScale.default.js.map