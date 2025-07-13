import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#111] text-white text-sm pt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1: Logo & Contact */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Commons-logo.svg/1200px-Commons-logo.svg.png"
              alt="EthioCodeCamp"
              className="h-10 w-10"
            />
            <h1 className="text-lg font-bold text-blue-500">ETHIOCODECAMP</h1>
          </div>
          <p>Asmara Street<br />Addis Ababa, Ethiopia</p>
          <p className="mt-2"><strong>Phone:</strong> +251907505050</p>
          <p><strong>Email:</strong> info@ethio.edu.et</p>
        </div>

        {/* Column 2: Useful Links */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Useful Links</h2>
          <div className="h-[2px] w-10 bg-blue-500 mb-3" />
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Accreditation</a></li>
            <li><a href="#" className="hover:underline">Office</a></li>
            <li><a href="#" className="hover:underline">Programs</a></li>
          </ul>
        </div>

        {/* Column 3: Admission */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Our Admission</h2>
          <div className="h-[2px] w-10 bg-blue-500 mb-3" />
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Distance</a></li>
            <li><a href="#" className="hover:underline">Extension</a></li>
            <li><a href="#" className="hover:underline">Regular Degree</a></li>
            <li><a href="#" className="hover:underline">Masters Degree</a></li>
          </ul>
        </div>

        {/* Column 4: Social */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Our Social Networks</h2>
          <div className="h-[2px] w-10 bg-blue-500 mb-3" />
          <p className="mb-4">Get updates from our social medias</p>
          <div className="flex space-x-3">
            <a href="#" className="bg-gray-800 p-2 rounded hover:bg-blue-600"><FaTwitter /></a>
            <a href="#" className="bg-gray-800 p-2 rounded hover:bg-blue-600"><FaFacebookF /></a>
            <a href="#" className="bg-gray-800 p-2 rounded hover:bg-blue-600"><FaInstagram /></a>
            <a href="#" className="bg-gray-800 p-2 rounded hover:bg-blue-600"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-5 pb-6 text-center text-gray-400">
        <p>© Copyright EthioCodeCamp. All Rights Reserved.</p>
        <p>
          DESIGNED BY: <span className="text-blue-500 hover:underline">LM IT Solution PLC</span>
        </p>
        <div className="flex justify-center mt-4 space-x-3">
          <a href="#" className="bg-gray-800 p-2 rounded hover:bg-blue-600"><FaTwitter /></a>
          <a href="#" className="bg-gray-800 p-2 rounded hover:bg-blue-600"><FaFacebookF /></a>
          <a href="#" className="bg-gray-800 p-2 rounded hover:bg-blue-600"><FaInstagram /></a>
          <a href="#" className="bg-gray-800 p-2 rounded hover:bg-blue-600"><FaLinkedinIn /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;