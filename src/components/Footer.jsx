import React from "react";
import Facebook from "../../public/facebook.png"
import Instagram from "../../public/instagram.png"
import Twitter from "../../public/twitter.png"

const Footer = () => {
  return (
    <footer className="text-center p-10 bg-[#244D3F]">
      <p className="font-semibold text-6xl text-white">KeenKeeper</p>
      <p className="my-5 text-[#ffffffbe]">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <p className="text-xl text-[#ffffffd8]">Social Links</p>
      <div className="flex justify-center gap-5 my-3">
        <img src={Facebook} alt="Facebook" className="w-10 h-10"></img>
        <img src={Instagram} alt="Instagram" className="w-10 h-10"></img>
        <img src={Twitter} alt="Twitter" className="w-10 h-10"></img>
      </div>
      <div className="flex justify-between mt-15 border-t-2 border-[rgba(255,255,255,0.05)] pt-5 text-[#ffffff70]">
        <div>
          <p>© 2026 KeenKeeper. All rights reserved.</p>
        </div>
        <div className="flex gap-5">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
