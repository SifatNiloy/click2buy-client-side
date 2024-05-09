import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <aside>
        <img className="w-32" src={logo} alt="" />
        <p>
          click2buy
          <br />
          Your Ultimate Online Shopping Destination.
        </p>
      </aside>
      <nav>
        <header className="footer-title">Explore</header>
        <a className="link link-hover">Shop</a>
        <a className="link link-hover">Deals</a>
        <a className="link link-hover">Collections</a>
        <a className="link link-hover">Gift Cards</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover">Press</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of Service</a>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Refund Policy</a>
      </nav>

    </footer>
  );
};

export default Footer;
