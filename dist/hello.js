"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createUser_1 = __importDefault(require("./services/createUser"));
// Exemplo de tipagem básica
function hello(request, response) {
    var user = createUser_1.default({
        name: "Marcos Lourinho",
        email: "marcos@emperium.com.br",
        password: "123123",
        techs: ["Node", "React", "React native"],
    });
    console.log(user);
    response.json({ message: "Hello Typescript" });
}
exports.hello = hello;
