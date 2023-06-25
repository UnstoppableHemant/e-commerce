import Button from "../components/buttons"
import Input from "../components/input"

const LogIn = () => {
  return (
    <>
      <div className="grid justify-center m-10">
        <div>Sign In</div>
        <div className="">
          <Input label="Email" name="email" type="email" placeholder="Enter your Email Address"/>
          <Input label="Password" name="pwd" type="password" placeholder="Enter your Password"/>
        </div>
        <div>
          <Button btnName="Log In" btnStyle="p-2 bg-[#febd69] rounded-md w-full" />
        </div>
      </div>
    </>
  )
}

export default LogIn