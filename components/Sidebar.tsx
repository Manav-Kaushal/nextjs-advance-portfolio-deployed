import React from "react";
import Link from "next/link";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineDownload } from "react-icons/hi";
import Image from "next/image";
import profilePic from "../public/images/portrait.jpg";

const Sidebar = () => {
  return (
    <div>
      <Image
        src={profilePic}
        alt="User Avatar"
        width={175}
        height={175}
        placeholder="blur"
        className="mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-heading">
        <span>Manav</span> Kaushal
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web Developer</p>
      <Link href="">
        <a
          className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
          download="name"
        >
          <HiOutlineDownload className="w-5 h-5" />
          &nbsp; Download Resume
        </a>
      </Link>
      <div className="flex justify-around w-9/12 mx-auto my-5 text-butterflyBlush md:w-full">
        <Link href="">
          <a>
            <AiFillGithub className="w-8 h-8 cursor-pointer" />
          </a>
        </Link>
        <Link href="">
          <a>
            <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
          </a>
        </Link>
        <Link href="">
          <a>
            <AiFillTwitterCircle className="w-8 h-8 cursor-pointer" />
          </a>
        </Link>
      </div>
      <div
        className="py-4 my-5 bg-gray-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <MdLocationOn className="w-5 h-5" />
          <address>Chandigarh, India</address>
        </div>
        <p className="my-2">manavkaushal756@gmail.com</p>
        <p className="my-2">+91 95012 06323</p>
      </div>
      {/* Email Button */}
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-butterflyBlush focus:outline-none"
        onClick={() => window.open("mailto: manavkaushal756@gmail.com")}
      >
        Email Me
      </button>
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-butterflyBlush focus:outline-none">
        Dark UI
      </button>
    </div>
  );
};

export default Sidebar;
