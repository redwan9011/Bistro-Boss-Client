import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 text-white ">

        <div className="text-center bg-gray-700 py-10">
          <h1 className="text-2xl mb-2 font-semibold">Contact Us</h1>

          <p className="text-sm leading-6">123 ABS Street, Uni 21, Bangladesh <br />
            +88 123456789 <br />
            Mon - Fri: 08:00 - 22:00 <br />
            Sat - Sun: 10:00 - 23:00</p>
        </div>

        <div className="bg-gray-800 flex flex-col items-center justify-center  py-10">
          <h1 className=" text-2xl mb-2 font-semibold">Follow Us</h1>
          <p className="mb-2">Join us on social media</p>
          <div className="flex gap-3">
            <FaFacebook></FaFacebook>
            <FaInstagram></FaInstagram>
            <FaTwitter></FaTwitter>
            <FaYoutube></FaYoutube>
          </div>
        </div>
      </div>
      <footer className="footer footer-center p-4 bg-black  text-white">
        <aside>
          <p className="text-xs  sm:text-base">Copyright © 2024 - All right reserved by SEA QUEEN</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;