import { Link } from "react-router-dom";
import Button from "../Components/Button";
import Input from "../Components/Input";
import NavBar from "../Home/NavBar";


export default function Register() {
    return (
            <>
            <NavBar/>
            <div className="w-full flex justify-center items-center min-h-screen ">
                <div className="w-full max-w-lg">
                    <form className="border border-gray-300 bg-slate-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <h3 className=' text-center mb-5 text-2xl'>Signup</h3>
                        <div className="mb-4">
                            <Input
                                label="Full Name"
                                placeholder = 'Enter Full Name'
                                type='text'
                                name="fullname"
                                id='fullName'
                            />
                        </div>
                        <div className="mb-6">
                            <Input
                                label="Email"
                                placeholder = 'Enter Email'
                                type='email'
                                name="email"
                                id='email'
                            />
                        </div>
                        <div className="mb-6">
                            <Input
                                type='password'
                                placeholder = 'Enter Password'
                                label="Password"
                                name="password"
                                id='password'
                            />
                        </div>
                        <div className="items-center justify-between">
                            <Button
                                type="signup"
                                size='large'
                                variant="primary"
                                className='w-full'
                            >
                                Sign up
                            </Button>
                        </div>

                        <p className='text-center mt-3'> If you have an account <Link className="underline text-sky-600" to={'/login'}>Login</Link></p>
                    </form>
                </div>
            </div>
            </>

    )
}
