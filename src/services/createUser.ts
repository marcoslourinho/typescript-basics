interface createUser {
  name?: string;
  email: string;
  password: string;
  techs: string[];
}

export default function createUser({
  name,
  email,
  password,
  techs,
}: createUser) {
  const user = {
    name,
    email,
    password,
    techs,
  };
  return user;
}
