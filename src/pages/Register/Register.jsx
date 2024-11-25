import Button from "../../components/Button";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Spinner from "../../components/Spinner/Spinner";

const Register = () => {
  const { googleLogin, loading, createUser,logOut } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
   
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        logOut()
        navigate('/login')

        // Show success toast
        toast.success("User created successfully! Please Log in to use your account",{duration: 6000});
        form.reset(); // Clear the form
      })
      .catch((error) => {
        // Handle specific Firebase error
        if (error.code === "auth/email-already-in-use") {
          toast.error("This email is already registered. Please log in.");
        } else {
          toast.error("Failed to create user. Please try again.");
        }
        console.error(error);
      });
  };

  // Handle Google sign-in
  const handleGoogleSignIn = async () => {
    try {
      await googleLogin();
      navigate('/')
    
      toast.success("Signup Successful");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
if (loading){
  return <Spinner/>
}
  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="flex w-full">
                <p>Already have an account?</p>
                <a href="/login" className="hover:underline text-blue-500">
                  Login
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <Button type="submit">Sign up</Button>
              <button
                onClick={handleGoogleSignIn}
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
  );
};

export default Register;
