import React from "react";
import { FaClock, FaEnvelope, FaHome, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-[#ffcceb]">
        <footer className="footer py-10  text-base-content w-10/12 mx-auto">
          <div className="">
            <div className="inline-flex items-center">
              <img
                className="w-10 rounded-full  me-2"
                src="https://i.ibb.co/hWczT9S/pngtree-kids-logo-image-79551.jpg"
                alt="logo"
              />
              <Link className=" text-2xl font-bold text-[#ff0099]">
                Kids Toys With Education
              </Link>
            </div>
            <p className="w-80">
              Kids Toys With Education is educational toys seller based in Chicago.
              We provide varites of eductional toys as like math learning toys, science toys, engineerinf toys etc.
            </p>
          </div>

          <div>
            <span className="footer-title opacity-100 text-[#ff0099]">
              Information
            </span>
            <Link className="link link-hover flex items-center gap-2"><FaHome></FaHome> 321/A, New York, USA. </Link>
            <Link className="link link-hover flex items-center gap-2"><FaPhone></FaPhone> +0125632552 </Link>
            <Link className="link link-hover flex items-center gap-2"><FaEnvelope></FaEnvelope>contact@ourmail.com</Link>
            <Link className="link link-hover flex items-center gap-2"><FaClock></FaClock>10:00AM - 5:00PM</Link>
            
          </div>
          <div>
            <span className="footer-title opacity-100 text-[#ff0099]">
              Legal & Privacy
            </span>
            <Link className="link link-hover">Terms of use</Link>
            <Link className="link link-hover">Privacy policy</Link>
            <Link className="link link-hover">Cookie policy</Link>
            <Link className="link link-hover">Contact</Link>
          </div>
          <div>
            <span className="footer-title opacity-100 text-[#ff0099]">
              Join Our Newsletter
            </span>
            <div className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="kidstoys@site.com"
                  className="input input-bordered w-full pr-16"
                />
                <button className="btn bg-[#ff0099] hover:bg-[#ff00bb] outline-none border-none absolute top-0 right-0 rounded-l-none">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </footer>
        {/* Footer Bottom */}
        <div className="w-10/12 mx-auto">
          <div className="items-center flex justify-between pb-10">
            <h4 className="text-xl font-bold text-[#ff0099] uppercase">Be connected with our social media</h4>
          <div className=" flex space-x-10 ">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-[#ff0099]"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-[#ff0099]"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-[#ff0099]"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
          </div>
          <hr />
          <p className="text-center py-5">Copyright © 2023 - All right reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
