import React from "react";

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
      <div>
        <p className="text-gray-700 text-sm">Email:</p>
        <a
          href="mailTo:hosseinzadehkhalkhaliz@gmail.com"
          className=" text-gray-500 hover:text-gray-700 transition"
        >
          Email:hosseinzadehkhalkhaliz@gmail.com
        </a>
      </div>
      <div>
        <p className="text-gray-700 text-sm ">GitHub</p>
        <a
          href="link github"
          target="_blank"
          className="text-gray-500 hover:text-gray-700 transition"
        >
          GitHub LInk
        </a>
      </div>
        <div>
        <p className="text-gray-700 text-sm ">Telegram</p>
        <a
          href="link github"
          target="_blank"
          className="text-gray-500 hover:text-gray-700 transition"
        >
          telegram
        </a>
      </div>
        <div>
        <p className="text-gray-700 text-sm ">Linkedin</p>
        <a
          href="link github"
          target="_blank"
          className="text-gray-500 hover:text-gray-700 transition"
        >
        LInkedin
        </a>
      </div>
    </div>
  );
};
export default ContactInfo ;
