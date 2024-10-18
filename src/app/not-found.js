// pages/404.js
import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-xl text-gray-600">Page Not Found</p>
        <p className="mt-2 text-gray-500">
          The page you are looking for does not exist.
        </p>
        <Link href="/">
          <button className="mt-6 inline-block px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-500">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
