// LICENSE : MIT
"use strict";
var fs = require("fs");
var example = fs.readFileSync(__dirname + "/example.js", "utf-8");
var types = require("ast-types");
var ast = require("esprima").parse(example, {
    raw: true
});
var n = types.namedTypes;
function isJQuery(node) {
    if (!n.CallExpression.check(node)) {
        return false
    }
    var calleeName = types.getFieldValue(node.callee, "name");
    return calleeName === "$" || calleeName === "jQuery"
}
types.visit(ast, {
    visitMemberExpression: function (path) {
        var node = path.node;
        var fieldValue = types.getFieldValue(node.property, "name");
        var parentName = types.getFieldValue(node.object, "name");
        if (parentName && fieldValue) {
            var definedScope = path.scope.lookup(parentName);
            if (!definedScope) {
                return false;
            }
            var definedValues = definedScope.getBindings()[parentName];
            var definedValue = definedValues[definedValues.length - 1];
            var varDeclaration = definedValue.parent;
            // var x = <jQuery>?
            var initProp = varDeclaration.value.init;
            if (isJQuery(initProp)) {
                console.log(parentName + "." + fieldValue + " is jQuery");
            }
        }
        return false;
    }
});