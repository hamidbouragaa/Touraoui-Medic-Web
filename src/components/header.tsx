import Link from 'next/link';
import Logo from './logo';
import { Button } from './ui/button';

export default function Header() {
  const navLinks = [
    { href: '/#services', label: 'Services' },
    { href: '/#health-resources', label: 'Ressources' },
    { href: '/blog', label: 'Blog' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo className="h-12 w-auto" />
        </Link>
        <nav className="hidden flex-1 items-center space-x-4 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild>
            <Link href="/#contact">Demander en ligne</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
