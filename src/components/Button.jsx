const Button = ({ children }) => {
  return (
    <button className="bg-green-400 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-lg transition">
      {children}
    </button>
  );
};

export default Button;