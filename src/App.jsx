import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaPhoneAlt, FaWhatsapp, FaCarSide } from 'react-icons/fa';
import { vehicles } from './sources';
import HeroSlider from './heroSlider';

export default function App() {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">AutoLuxe</h1>
        <nav className="space-x-4">
          <a href="#" className="text-gray-700 hover:text-blue-600">Accueil</a>
          <a href="#vehicles" className="text-gray-700 hover:text-blue-600">Véhicules</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600">À propos</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <HeroSlider />
     
      {/* Vehicles */}
      <section id="vehicles" className="py-16 px-6 bg-gray-100">
        <h3 className="text-3xl font-semibold text-center mb-10">Nos véhicules</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {vehicles.map((v, i) => (
            <div key={i} className="bg-white rounded-xl shadow overflow-hidden">
              <img src={v.image} alt={v.name} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-bold mb-2">{v.name}</h4>
                <p className="text-gray-600 mb-4">{v.price}</p>
                <div className='flex justify-between'>
                  <p><a href="https://wa.me/2250700000000" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 inline-block"><FaWhatsapp className="inline mr-2" />Réserver</a></p>
                  <p><a href="#" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 inline-block"><FaPhoneAlt className="inline mr-2" />contactez</a></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6">À propos de AutoLuxe</h3>
          <p className="text-gray-700 leading-relaxed">
            AutoLuxe est une entreprise de location de véhicules en Côte d'Ivoire, proposant des voitures fiables à des prix compétitifs. Que ce soit pour un déplacement personnel ou professionnel, nous avons ce qu’il vous faut.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 bg-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6">Contactez-nous</h3>
          <p className="text-gray-700 mb-4">Vous pouvez nous écrire ou nous appeler pour toute information.</p>
          <div className="flex justify-center gap-6">
            <a href="tel:+2250700000000" className="text-blue-600 hover:underline flex items-center gap-2"><FaPhoneAlt /> 07 00 00 00 00</a>
            <a href="https://wa.me/2250700000000" className="text-green-600 hover:underline flex items-center gap-2"><FaWhatsapp /> WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-6 text-center">
        &copy; 2025 AutoLuxe. Tous droits réservés.
      </footer>
    </div>
  );
}
