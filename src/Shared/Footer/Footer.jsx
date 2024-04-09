import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { FaSquareXTwitter } from 'react-icons/fa6';

function Footer() {
  return (
    <div>
      <footer className="relative bg-blueGray-200 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl fonat-semibold text-blueGray-700">
                Lets keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="flex justify-center gap-6 text-3xl">
                <FaFacebook className="text-blue-800" />
                <FaGithub className="bg-white" />
                <FaSquareXTwitter />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                        About Us
                    </li>
                    <li>
                        Blog
                    </li>
                    <li>
                        Github
                    </li>
                    <li>
                        Free Products
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-base font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled text-sm ">
                    <li>
                        MIT License
                    </li>
                    <li>
                        Terms &amp; Conditions
                    </li>
                    <li>Privacy Policy</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © All Right Reserved by Elit Homes.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
