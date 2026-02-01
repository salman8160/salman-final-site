'use client';

const Footer = () => {
  return (
    <footer
      id="footer"
      className="flex flex-col items-center justify-center bg-black text-gray-500 py-8 border-t border-gray-700"
    >
      <p className="text-sm">
        © {new Date().getFullYear()} Salman Tabrez | Cloud Security Architect
      </p>
      <p className="text-sm mt-2">
        Built with Next.js, Tailwind CSS, Three.js, Framer Motion
      </p>
    </footer>
  );
};

export default Footer;
