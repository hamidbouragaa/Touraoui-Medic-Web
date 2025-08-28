import Link from 'next/link';
import { Button } from './ui/button';
import Logo from './logo';

export default function HeroLogo() {
  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-b from-blue-50 to-background">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-8">
            <Logo className="h-32 w-auto" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline text-foreground">
          Votre Santé, Notre Priorité
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          La Pharmacie Touraoui Medic, votre partenaire santé de confiance à Kelaa M'Gouna.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#contact">Contactez-nous</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#services">Nos Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
