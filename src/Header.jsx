import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // icônes (facultatif)

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between relative z-50">
      <h1 className="text-2xl font-bold text-blue-600">Jadd.AutoSales</h1>

      {/* Menu Desktop */}
      <nav className="hidden md:flex space-x-6">
        <a href="#" className="text-gray-700 hover:text-blue-600 transition">Accueil</a>
        <a href="#vehicles" className="text-gray-700 hover:text-blue-600 transition">Véhicules</a>
        <a href="#about" className="text-gray-700 hover:text-blue-600 transition">À propos</a>
        <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
      </nav>

      {/* Menu Burger */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md p-4 md:hidden flex flex-col space-y-4">
          <a href="#" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600">Accueil</a>
          <a href="#vehicles" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600">Véhicules</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600">À propos</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600">Contact</a>
        </div>
      )}
    </header>
  );
}
