import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-blue-600 text-white flex justify-between p-4">
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/api">API</Link>
      </div>
      <button
        onClick={toggleTheme}
        className="bg-gray-200 text-black px-4 py-2 rounded"
      >
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
}
