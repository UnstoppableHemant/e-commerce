import Header from "./component/Header";
import Footer from "./component/Footer";
const AppLayout = ({children}) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}

export default AppLayout