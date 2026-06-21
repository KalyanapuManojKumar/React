import { type ActionFunctionArgs, redirect } from "react-router-dom";

import { createUser } from "./userApi";

export const createUserAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const user = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
  };
  console.log(user);
  await createUser(user);

  return redirect("/");
};
