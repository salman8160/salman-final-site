const Button = ({ children, variant = "primary", ...props }: { children: React.ReactNode; variant?: "primary" | "secondary" } & React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={`px-8 py-4 text-lg font-bold rounded-full transition ${
      variant === "primary" ? "text-white bg-purple-600 hover:bg-purple-700" : "text-purple-400 border-2 border-purple-400 hover:bg-purple-400 hover:text-white"
    }`}
    {...props}
  >
    {children}
  </button>
);

export default Button;