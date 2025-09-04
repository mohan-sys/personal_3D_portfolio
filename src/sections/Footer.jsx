import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>

        <div className="socials flex items-center gap-4 justify-center">
          {socialImgs.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="icon inline-flex rounded-full p-2 transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              <img
                src={social.imgPath}
                alt={social.name}
                className="h-6 w-6 object-contain"
                loading="lazy"
              />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Mohan Raj Loganathan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
