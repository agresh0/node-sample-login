import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserRegisterAction } from '../action/UserRegisterAction'

function SignIn() {

  const dispatch = useDispatch()
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');  
console.log(userName);
console.log(password);
  const { initialState } = useSelector((state) => state.UserRegisterReducer)
  console.log(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(UserRegisterAction(userName, password))
  }
  useEffect(() => {
    // dispatch(UserRegisterAction(userName,password));
  }, [])

  return (
    <>
      <div>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setUserName(e.target.value)} />
          <label htmlFor="floatingInput"> User Name</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <label htmlFor="floatingPassword">Password</label>
        </div>
      </div>
      <button className='btn btn-primary' onClick={handleSubmit}>
        SignUp
      </button>

    </>
  )
}

export default SignIn