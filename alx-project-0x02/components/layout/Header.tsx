import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4 px-6 flex flex-col md:flex-row justify-between items-center w-full">
      <div className="text-xl font-bold text-blue-600 mb-4 md:mb-0">
        <Link href="/">ALX Project 2</Link>
      </div>
      <nav className="flex space-x-6">
        <Link href="/home" className="text-gray-600 hover:text-blue-600 font-medium">Home</Link>
        <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium">About</Link>
      </nav>
    </header>
  );
};

export default Header;