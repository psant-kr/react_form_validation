import { useState } from "react";
import { useForm } from "react-hook-form"
import './App.css';


function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [userInfo, setUserInfo] = useState()

  const onSubmit = (data) => {
    setUserInfo(data)
    console.log(data);
  }

  return (
    <main className="container">
      <pre className="text-white">{JSON.stringify(userInfo, undefined, 2)}</pre>
      <div className="reg_Form">
        {/* <pre>{JSON.stringify(userInfo, undefined, 2)}</pre> */}
        <form className="form_content"  onSubmit={handleSubmit(onSubmit)}>
          <h1 className='font-sans text-4xl font-normal  text-black my-12'>Registration form</h1>
          <div className="">
            {/* <label className=" ">Username -</label> */}
            <input className="" type='text' name='userName' placeholder='Username' {...register('userName', { required: "Username is required " })} />
          </div>
          <p>{errors.userName?.message}</p>
          <div>
            {/* <label>Email</label> */}
            <input type='email' name='email' placeholder='Email' {...register('email', {
              required: " Email is required ", pattern: {
                value: /^\S+@\S+$/i,
                message: "This is not a valid email",
              },
            })} />
          </div>
          <p>{errors.email?.message}</p>
          <div>
            {/* <label>Password</label> */}
            <input type='password' name='password' placeholder='Password' {...register('password', {
              required: "Password is required ", minLength: {
                value: 6,
                message: "Password must be more than 6 characters",
              },
              maxLength: {
                value: 10,
                message: "Password cannot exceed more than 10 characters",
              },
            })} />
          </div>
          <p>{errors.password?.message}</p>
          <button>Submit</button>
        </form>
      </div>
    </main>

  );
}

export default App;
