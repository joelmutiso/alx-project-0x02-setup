import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <div className="text-2xl font-bold text-blue-600">
        <Link href="/home">ALX Project 0x02</Link>
      </div>
      <nav>
        <ul className="flex space-x-8 text-lg font-medium">
          <li>
            <Link href="/home" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
          </li>
          <li>
            <Link href="/posts" className="text-gray-700 hover:text-blue-600 transition">Posts</Link>
          </li>
          <li>
            <Link href="/users" className="text-gray-700 hover:text-blue-600 transition">Users</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;