import React from 'react'
import Button from '../../components/Button'
import { FcGoogle } from 'react-icons/fc'

const Login = () => {
  return (
    <div className="hero bg-background min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="flex w-full">
          <p>Do not have an account?</p>
          <a
            href="/register"
           
            className='hover:underline text-blue-500'
          >
            Sign up
          </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <Button>Login</Button>
          <button
                // disabled={loading}
                // onClick={handleGoogleSignIn}
                className="disabled:cursor-not-allowed mx-auto bg-transparent hover:bg-gray-200 flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer rounded-2xl w-full"
              >
                <FcGoogle size={32} />

                <p>Continue with Google</p>
              </button>

        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default Login