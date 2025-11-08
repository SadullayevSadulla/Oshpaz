import Footer from "./Footer/footer";
import Header from "./Header/header"
import HeaderDs from "./HeaderDs/headerDs";
import HeaderMain from "./HeaderMain/headerMain";
import Main from "./Main/main";
import MainDas from "./MainDas/mainDas";
import MainDs from "./MainDs/mainDs";
import MainMaps from "./MainMaps/mainMaps";
import MainYer from "./MainYer/mainYer";
import MainYu from "./MainYu/mainYu";

const AllCompanents = () =>{
    return <>
     <div className="wrap">
        <Header/>
        <HeaderMain/>
        <HeaderDs/>
        <Main/>
        <MainDs/>
        <MainDas/>
        <MainYu/>
        <MainMaps/>
        <MainYer/>
        <Footer/>
     </div>
    </>
}
export default AllCompanents;