import { Link} from "react-router-dom";
import { Label, TextInput, Button } from "flowbite-react";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20 ">
      <div className="flex flex-col max-w-3xl gap-5 p-3 mx-auto md:flex-row md:items-center">
        {/* left side */}
        <div className="flex-1">
          <Link
          to="/"
          className="text-4xl font-bold dark:text-white"
        >
          <span className="px-2 py-1 text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Thilini's</span>
             Blog
          </Link>
          <p className="mt-5 text-sm">
            You can sign up with your email and password 
             or with Google.
          </p>
        </div>
        {/* right side */}
        <div className="flex-1">
          <form className="flex flex-col w-full gap-4"> 
            <div>
              <Label value="User Name" />
              <TextInput 
               type="text"
               placeholder="Username"
               id="username"
              />
            </div>
            <div>
              <Label value="Email" />
              <TextInput 
               type="text"
               placeholder="name@company.com"
               id="useremail"
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput 
               type="text"
               placeholder="Password"
               id="userpassword"
              />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">Sign Up</Button>
          </form>
          <div className="flex gap-2 mt-5 text-sm">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500 ">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
