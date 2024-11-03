import React from 'react'
import Button from '../../components/Button'

const Register = () => {
  return (
    <div className="hero bg-background min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">SignUp now!</h1>
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
            <p>Already have an account?</p>
            <a
              href="/login"
             
              className='hover:underline text-blue-500'
            >
              Login
            </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <Button>Sign up</Button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Register