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
    <div className="App">
      <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className='text-4xl text-red-500 font-bold'>Registration form</h1>
        <div className="border-solid border border-indigo-600">
          <label className="text-xl text-slate-700 font-semibold ">Username -</label>
          <input className="border-solid border-2 border-black ml-3 pl-2 rounded" type='text' name='userName' placeholder='Username' {...register('userName', { required: "Username is required " })} />
        </div>
        <p>{errors.userName?.message}</p>
        <div>
          <label>Email</label>
          <input type='email' name='email' placeholder='Email' {...register('email', {
            required: " Email is required ", pattern: {
              value: /^\S+@\S+$/i,
              message: "This is not a valid email",
            },
          })} />
        </div>
        <p>{errors.email?.message}</p>
        <div>
          <label>Password</label>
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
  );
}

export default App;
