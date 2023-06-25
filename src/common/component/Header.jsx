import { useNavigate } from 'react-router-dom';
import logo from '../../assets/img/Amazon-logo.png';
import Button from '../../components/buttons';
const Header = () => {
const navigate = useNavigate();
  return (
    <nav className='pl-4 pr-6 bg-[#131921] text-white flex justify-between items-center'>
      <div className='flex gap-8 items-center'>
        <img className='h-14 w-35' src={logo} alt='Amazon-Logo'/>
        <p onClick={()=>navigate("/")}>Home</p>
        <p onClick={()=>navigate("/about")}>About</p>
        <p onClick={()=>navigate("/contact")}>Contact Us</p>
      </div>
      <div className='w-[50%] flex text-black'> 
        <input type='text' className='w-full rounded-l-md p-2 border focus:border-[#febd69]'/>
        <Button btnStyle="bg-[#febd69] rounded-r-md p-2" btnName="Search" handleClick={()=>navigate("/search")}/>
        {/* <button className='bg-[#febd69] rounded-r-md p-2'>Search</button> */}
      </div>
      <div className='flex gap-6'>
        {/* <Button btnStyle="" btnName="Sign In"/> */}
        <p onClick={()=>navigate("/login")}>Sign In</p>
        <p onClick={()=>navigate("/signup")}>Sign Up</p>
        <p onClick={()=>navigate("/cart")}>Cart</p>
      </div>
    </nav>
  )
}

export default Header