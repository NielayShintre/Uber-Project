import UberLogoWhite from "../assets/UberLogoWhite.png";
import citytraffic from "../assets/citytraffic.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div
      className="bg-cover bg-center h-screen pt-8 w-full flex justify-between flex-col"
      style={{ backgroundImage: `url(${citytraffic})` }}
    >
      <img src={UberLogoWhite} alt="Uber Logo" className="w-14 ml-8" />
      <div className="bg-white pb-7 py-4 px-4 rounded-t-3xl">
        <h2 className="text-2xl font-bold mb-4">Get Started with Uber</h2>
        <Link
          to="/login"
          className=" flex items-center justify-center w-full bg-black text-white py-3 mt-2 rounded-lg font-medium"
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Home;
