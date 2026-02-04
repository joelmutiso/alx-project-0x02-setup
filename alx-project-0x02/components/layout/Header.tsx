const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center w-full">
      <div className="text-xl font-bold text-gray-800">ALX Project 2</div>
      <nav className="space-x-4">
        <a href="#" className="text-gray-600 hover:text-blue-600 transition">Home</a>
        <a href="#" className="text-gray-600 hover:text-blue-600 transition">About</a>
      </nav>
    </header>
  );
};

export default Header;