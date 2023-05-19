import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
    const {createNewUser, updateUserData} = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState("");

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photoUrl.value;
        // console.log( name, email, password, photo)}

        // Validate Password field
    if (!/(?=.*[A-Z])/.test(password)) {
        setErrorMessage("Password: Please add at least one uppercase letter");
        return;
      } else if (!/(?=.*[0-9])/.test(password)) {
        setErrorMessage("Password: Please add at least one number");
        return;
      } else if (password.length < 6) {
        setErrorMessage("Password must be 6 characters or more");
        return;
      }

        createNewUser(email, password)
        .then((result)=>{
            setErrorMessage("");
        setSuccess("");
            const newUser = result.user;
            console.log(newUser)
            // Update new user displayName & Photo URL
            updateUserData(newUser, name, photo)
            .then(()=>{
                setSuccess("User has been created successfully!!!")
                form.reset();
            })
            .catch((error) =>{
                setErrorMessage(error.message)
            })
        })
        .catch((error) =>{
            setErrorMessage(error.message)
        })
    }


  return (
    <>
      <div className="w-10/12 mx-auto grid grid-cols-2 items-center px-5 my-5">
        {/* Register Banner */}
        <div className="max-w-xl">
          <img
            className="rounded-md w-full"
            src="https://i.ibb.co/6JC40tp/sign-page-abstract-concept-illustration-335657-2242.jpg"
            alt="Register image"
          />
        </div>
        <div className=" card  max-w-md shadow-2xl bg-base-100 w-10/12 mx-auto">
          {/* Register Title */}
          <div className="text-center mt-3 px-7">
            <h4 className="text-2xl font-bold mb-2 text-[#ff0099]">Please Register</h4>
            <hr />
          </div>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Enter Password</span>
              </label>
              <input
                type="password"
                placeholder="Type Password"
                className="input input-bordered"
                name="password"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Paste Your Photo URL..."
                className="input input-bordered"
                name="photoUrl"
                required
              />
            </div>
            {/* Success & Error Message Display Section */}
            <p className="text-green-600">{success}</p>
            <p className="text-red-600">{errorMessage}</p>
            <div className="form-control ">
              <button className="btn bg-[#ff0099] border-none hover:bg-[#FF55BB] my-2">Register</button>
            </div>
            <div>
              <p>
                Already have an account?{" "}
                <Link to={"/login"} className="underline text-[#ff0099]">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
