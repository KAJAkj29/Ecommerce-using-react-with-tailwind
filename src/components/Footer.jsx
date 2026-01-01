import React from "react";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>

      <footer className="w-full">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1">


          <div className=" p-10 flex flex-col justify-center items-center">
            <h1 className="logo text-6xl font-bold text-cyan-500">SHOENIQUE</h1>

            <p className="text-xl text-center mt-6 leading-relaxed">
              Get shoes ready for the new term at your nearest Converse store. <br />
              Find your perfect size in store and get rewards.
            </p>

            <div className="flex justify-center gap-8 mt-10">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-500 transition"
              >
                <FaGithub size={40} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-500 transition"
              >
                <FaInstagram size={40} />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-500 transition"
              >
                <FaTwitter size={40} />
              </a>
            </div>
          </div>


          <div className=" text-black p-10 grid grid-cols-1 md:grid-cols-2 gap-10">


            <div>
              <h2 className="text-3xl font-semibold mb-6 text-center">Products</h2>
              <p className="text-lg text-center leading-relaxed">
                Chuck Taylor All Star <br />
                Run Star Hike Platform <br />
                Chuck 70 Tri-Color <br />
                Star Player 76 <br />
                Run Star Legacy Chelsea
              </p>
            </div>


            <div>
              <h2 className="text-3xl font-semibold mb-6 text-center">Get in Touch</h2>
              <p className="text-lg text-center leading-relaxed">
                📧 customer@shoenique.com <br />
                📞 +92 554 862 354
              </p>
            </div>
          </div>
        </div>
      </footer>


      <div className="bg-black text-white text-center py-5">
        <p className="text-lg">
          © {new Date().getFullYear()} SHOENIQUE. All rights reserved.
        </p>
        <p className="text-sm mt-2 cursor-pointer hover:underline">
          Terms & Conditions
        </p>
      </div>
    </>
  );
}

export default Footer;
