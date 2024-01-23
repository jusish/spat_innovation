import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-10 pb-5 text-white bg-gradient-to-r from-gradient1 to-gradient3">
      <div className="flex flex-col gap-8 mx-4 mb-10 md:flex-row md:mx-8 lg:mx-16">
        <div className="md:w-[348.99px]">
          <p className="mb-5 font-[500] text-[19.39px]">About us</p>
          <a href="https://tailwindcss.com/docs/background-image#linear-gradients">
            <img src="/assets/spatlogo.png" alt="logo" />
          </a>

          <p>
            Spatium Innovation Hub is a thinking company on a mission to connect
            people and businesses with meaningful innovation.
          </p>
          <div className="flex gap-5 mt-5">
            <img src="/assets/Facebook.png" alt="Facebook" />
            <img src="/assets/Instagram.png" alt="Instagram" />
            <img src="/assets/LinkedIN.png" alt="LinkedIN" />
            <img src="/assets/Twitter.png" alt="Twitter" />
          </div>
        </div>
        <div className="md:w-[348.99px]">
          <h1 className="mb-10 font-[500] text-[19.39px]">Resources</h1>
          <div className="space-y-2 font-[400] text-[17.41px]">
            <p>Help center</p>
            <p>Patners</p>
            <p>Gas-Free MarketPlace</p>
            <p>Docs</p>
            <p>Utility</p>
          </div>
        </div>
        <div className="md:w-[348.99px]">
          <h1 className="mb-10 font-[500] text-[19.39px]">Services</h1>
          <div className="space-y-2 font-[400] text-[17.41px]">
            <p>Software Development</p>
            <p>Identity Management & Verification</p>
            <p>IT Consulting & Advisory Services</p>
            <p>UI/UX Design</p>
          </div>
        </div>
        <div className="md:w-[348.99px]">
          <h1 className="mb-10 font-[500] text-[19.39px]">Quicklinks</h1>
          <div className="space-y-2 font-[400] text-[17.41px]">
            <p>Careers</p>
            <p>Resources</p>
            <p>Products</p>
            <p>Blog</p>
          </div>
        </div>
      </div>
      <hr className="border-white" />
      <div className="flex items-center justify-center mt-5">
        <p>Copyright 2020. Spatium Innovation Hub. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
