import { Link } from "react-router-dom";
import Button from "../Components/Button";
import Input from "../Components/Input";
import NavBar from "../Home/NavBar";

function Login() {

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Data", event)
  }

  return (
    <>
      <NavBar />
      <div className="w-full flex justify-center items-center min-h-screen ">
        <div className="w-full max-w-lg">
          <form onSubmit={onSubmit} className="border border-gray-300 bg-slate-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h3 className=' text-center mb-5 text-2xl'>Login</h3>
            <div className="mb-4">
              <Input
                label="Username"
                type='text'
                name="username"
                placeholder='Enter Username'
                id='username'
              />
            </div>
            <div className="mb-6">
              <Input
                type='password'
                label="Password"
                placeholder='Enter Password'
                name="password"
                id='password'
              />
            </div>
            <div className="items-center justify-between">
              <Button
                type="login"
                size='large'
                variant="primary"
                className='w-full'
              >
                Login
              </Button>
              <p></p>
            </div>
            <p className="text-center mt-3">Don't have an Account? <Link className="underline text-sky-600" to={"/register"} > Register</Link></p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;