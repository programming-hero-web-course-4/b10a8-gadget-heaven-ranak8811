import Heading from "./Heading";

const Footer = () => {
  return (
    <div>
      <div>
        <Heading
          title={"Gadget Heaven"}
          subtitle={
            "Leading the way in cutting-edge technology and innovation."
          }
        ></Heading>
      </div>

      <footer className="footer text-center mx-auto p-10">
        <nav className="text-center">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
