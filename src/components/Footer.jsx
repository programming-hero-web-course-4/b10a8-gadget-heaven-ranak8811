import Heading from "./Heading";

const Footer = () => {
  return (
    <footer className="mb-5">
      <div className="w-auto">
        <Heading
          title={"Gadget Heaven"}
          subtitle={
            "Leading the way in cutting-edge technology and innovation."
          }
        ></Heading>
      </div>

      <hr className="mb-5" />

      <div className="flex flex-col md:flex-row gap-6 md:gap-36 lg:gap-40  justify-center text-center">
        <nav className="flex flex-col text-center">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover font-thin">Product Support</a>
          <a className="link link-hover font-thin">Order Tracking</a>
          <a className="link link-hover font-thin">Shipping & Delivery</a>
          <a className="link link-hover font-thin">Returns</a>
        </nav>
        <nav className="flex flex-col text-center">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover font-thin">About us</a>
          <a className="link link-hover font-thin">Careers</a>
          <a className="link link-hover font-thin">Contact</a>
        </nav>
        <nav className="flex flex-col text-center">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover font-thin">Terms of Service</a>
          <a className="link link-hover font-thin">Privacy Policy</a>
          <a className="link link-hover font-thin">Cookie Policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
