import { LOGIN_URL, REGISTER_URL } from "./constant";
import { loginLogout, userError, userRegistration } from "./userSlice";

export const authenticateUser = async(email:string, password:string, callFor:string, dispatch:any) => {
  try {
    const fetchURL = callFor === 'login' ? LOGIN_URL : REGISTER_URL;
    const response = await fetch(fetchURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    if (!response.ok) {
      throw new Error('Authentication failed');
    }
    const data = await response.json();
    dispatch(loginLogout(true))
    dispatch(userRegistration(data))
  } catch (error) {
    dispatch(userError((error as Error).message))
  }
};
