import { Response, Request } from "express";
import createUser from "./services/createUser";

// Exemplo de tipagem básica
export function hello(request: Request, response: Response) {
  const user = createUser({
    name: "Marcos Lourinho",
    email: "marcos@emperium.com.br",
    password: "123123",
    techs: ["Node", "React", "React native"],
  });

  console.log(user);
  response.json({ message: "Hello Typescript" });
}
