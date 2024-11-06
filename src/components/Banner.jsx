import { Link } from "react-router-dom";
import banner_img from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="md:mb-56 mb-44 lg:mb-[340px] relative">
      <div className="bg-[#9538E2] text-white text-center pt-5 space-y-6  rounded-b-xl">
        <h1 className="text-3xl md:text-5xl font-bold w-11/12 md:w-10/12 mx-auto">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="w-10/12 md:w-7/12 mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="btn rounded-full">
          <Link to={`/dashboard`}>Shop Now</Link>
        </button>

        <div className="h-44"></div>
      </div>

      <div className=" w-[350px] lg:w-[750px] md:w-[500px] lg:h-[400px] absolute bg-base-100/40 p-5 rounded-xl lg:top-1/4  md:top-1/3 top-2/4 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <img
          className="w-full h-full mx-auto rounded-xl"
          src={banner_img}
          alt=""
        />
      </div>
    </div>
  );
};

export { Banner };
