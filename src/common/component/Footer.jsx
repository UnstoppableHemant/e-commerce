import { useNavigate } from "react-router-dom"
import Button from "../../components/buttons"

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="w-full text-center">
      <div className="">
        <hr/><br/>
        <p>Hurry Up!! Sign In to grab offers.</p>
        <Button btnStyle="bg-[#febd69] rounded-md p-1 w-60" btnName="Sign In" handleClick={()=>navigate("/login")}/>
        <p>New Customer? Start Here</p>
        <br/><hr/><br/>
      </div>
      <div className="bg-[#37475A] text-white p-3">
        <p>Back to Top</p>
      </div>
      <div className="bg-[#131921] text-white p-3">
        <p>© 1996-2023, Amazon.com, Inc.</p>
      </div>
    </footer>
  )
}

export default Footer