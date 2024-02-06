export const checkValidation = (email:string, password:string) : string | null =>{
  const isEmailVaild = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
  if(!isEmailVaild) return "Email is not valid";
  if(!isPasswordValid) return "Password is not valid";
  return null
}