import { useEffect, useState } from "react"
import Button from "../components/buttons"
import Input from "../components/input"

const SignUp = () => {
  const [formData,setFormData]=useState({});
  const [userList,setUserList]=useState([]);
  const handleChange=(e)=>{
    const {name,value}= e.target;
    setFormData({...formData,[name]:value});
    console.log(formData);
  }
  const handleClick=()=>{
    const fd = formData;
    setUserList([...userList,fd]);
  }
  useEffect(()=>{
    localStorage.setItem('formData',JSON.stringify(userList));
  },[userList])
  return (
    <div className="grid border justify-center p-4">
      <div className="flex">
        <Input label="First Name" type="text" name="first Name" placeholder="First Name" onChange={handleChange}/>
        <Input label="Last Name" type="text" name="last Name" placeholder="Last Name"  onChange={handleChange}/>
      </div>
      <div>
        <Input label="Email" type="email" name="email" placeholder="Email" onChange={handleChange}/>
      </div>
      <div>
        <Input label="Password" type="password" name="password" placeholder="Password" onChange={handleChange}/>
      </div>
      <div>
        <Input label="Confirm Password" type="password" name="confirm password" placeholder="Confirm Password" onChange={handleChange}/>
      </div>
      <div>
        <Button btnName="Sign Up" btnStyle="p-2 bg-[#febd69] rounded-md w-full" handleClick={handleClick}/>
      </div>
    </div>
  )
}

export default SignUp