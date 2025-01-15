
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="footercontainer w-screen h-[45vh] flex ">
      <div className="div1 bg-emerald-950 flex-1 flex flex-col  justify-start text-white pl-20 pt-10">
        <h2 className="text-3xl">LOGO</h2>
        <p className="mt-5 text-md">Wework, Salarpuria Symbiosis Road,<br />
            Bannerghatta Road, Begur Hobli,<br />
            Bengaluru Urban,<br />
            Karnataka, 560076.</p>
      </div>

      <div className="div2 bg-emerald-950 flex-1 flex flex-col items-center justify-start text-[#c5c5c5]">
        <h1 className="text-3xl mt-10"> <i>Contact</i></h1>
        <p>info@mesaschool.co</p>
        <div className="flex items-center justify-between gap-2 mt-10">
            <div className="bg-red-300 ">OO</div>
            <div className="bg-red-300 ">OO</div>
            <div className="bg-red-300 ">OO</div>
        </div>
        

      </div>

      <div className="div2  bg-emerald-950 flex-1 flex flex-col items-center justify-start text-[#c5c5c5]">
        <h1 className="text-3xl mt-10"> <i>Quick Links</i></h1>
       
        <div className=" items-center justify-between gap-2">
            <Link to="/" ><div className="b p-2 mt-1">Home</div></Link> 
            <Link to="/learning"><div className=" p-2 mt-1">Learning</div></Link> 
            <Link to="/program"><div className=" p-2 mt-1">Program</div></Link> 
            <Link to="/admissions"><div className=" p-2 mt-1">Admission</div></Link> 
        </div>
        

      </div>
    </div>
  );
};

export default Footer;
