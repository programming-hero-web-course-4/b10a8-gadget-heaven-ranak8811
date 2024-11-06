import { Outlet } from "react-router-dom";
import { Banner } from "../components/Banner";
import useTitle from "../../public/PageTitle/title";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
