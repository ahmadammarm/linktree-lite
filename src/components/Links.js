/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const Links = () => {
  const links = [
    {
      img: "/img/a.png",
      link: "https://ammar-porto.vercel.app",
      title: "My Website",
    },
    {
      img: "/img/174857.png",
      link: "https://www.linkedin.com/in/ahmadammarmusyaffa/",
      title: "My LinkedIn",
    },
    {
      img: "/img/instagram.png",
      link: "https://instagram.com/ahmadammrm",
      title: "My Instagram",
    },
    {
      img: "/img/25231.png",
      link: "https://github.com/ahmadammarm",
      title: "My Github",
    },
  ]
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
      "
    >
      {links.map((link, index) => (
        <a
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-gray-300
            flex
            items-center
            justify-center
            bg-gradient-to-r
            from-teal-800
            to-teal-900
            border-2
            p-2
            w-80
            mb-4
            hover:scale-105
            transition
            duration-400
            ease-in-out
            left-0
          "
        >
          <img src={link.img} alt="Link Image" className="w-6 mr-4 inline-block" /> {/* Ubah margin di sini */}
          {link.title}
        </a>
      ))}
    </div>
  );
};

export default Links;
