import { FaShopify } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer p-10  bg-base-200  mt-20  bottom-0 left-0   ">
      <aside>
      <a className="font-semibold flex mx-auto justify-center items-center  text-2xl"> <span className="text-rose-500 text-3xl">D</span> oko-Fashion    <FaShopify className="ml-2 mt-1 text-lime-400"> </FaShopify> </a>
        
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
