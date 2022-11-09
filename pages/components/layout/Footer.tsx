import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer uppercase items-center justify-center text-xs p-4 bg-base-content text-neutral-content bottom-0">
      <div className="place-items-center">
        <Link
          className="hover:underline"
          href="https://apod.nasa.gov/apod/lib/about_apod.html"
        >
          Learn more about Nasa APOD
        </Link>
        <Link
          className="hover:underline"
          href="https://www.nasa.gov/education/maianse/resources"
        >
          Donate to Space Center
        </Link>
        <Link
          className="hover:underline"
          href="https://apod.nasa.gov/apod/lib/about_apod.html"
        >
          Learn even more!
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
