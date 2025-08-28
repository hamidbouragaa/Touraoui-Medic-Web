import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import Logo from './logo';

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-300">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
               <span className="text-xl font-bold text-white">Pharmacie Touraoui Medic</span>
            </Link>
            <p className="text-sm">Votre partenaire santé de confiance à Kelaa M'Gouna.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 shrink-0 text-accent" />
                <span>Pharmacie Touraoui Medic, Kelaa M'Gouna, Province de Tinghir, Maroc</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 shrink-0 text-accent" />
                <a href="tel:+212661348468" className="hover:text-white">+212 661-348468</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 shrink-0 text-accent" />
                <a href="mailto:southeast.adell@gmail.com" className="hover:text-white">southeast.adell@gmail.com</a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Liens Rapides</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#services" className="hover:text-white">Nos Services</Link></li>
              <li><Link href="/#health-resources" className="hover:text-white">Ressources Santé</Link></li>
               <li><Link href="/#location" className="hover:text-white">Notre Emplacement</Link></li>
              <li><Link href="/#contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Pharmacie Touraoui Medic. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
