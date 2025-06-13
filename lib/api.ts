// lib/api.ts
import axios from "axios";

export async function loginUser(email: string, password: string) {
  const response = await axios.post(
    "https://nfc.premierwebtechservices.com/api/login",
    {
      username: email,
      user_type: "customer",
      password: password,
      login_type: "email",
    }
  );
  return response.data;
}
