import { Tablet, Stethoscope, Syringe, HeartPulse } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const services = [
  {
    icon: Tablet,
    title: 'Délivrance de Médicaments',
    description: 'Service rapide et fiable pour toutes vos ordonnances et médicaments sans prescription.',
  },
  {
    icon: Stethoscope,
    title: 'Conseils Santé Personnalisés',
    description: 'Nos pharmaciens experts sont à votre écoute pour vous conseiller sur votre santé et bien-être.',
  },
  {
    icon: Syringe,
    title: 'Vaccinations',
    description: 'Protégez-vous et vos proches avec nos services de vaccination saisonnière et de voyage.',
  },
  {
    icon: HeartPulse,
    title: 'Prise de Tension Artérielle',
    description: 'Suivi régulier de votre tension artérielle pour une meilleure prévention cardiovasculaire.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 lg:py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            Nos Services à votre disposition
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Nous offrons une gamme complète de services pour prendre soin de vous et de votre famille.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="text-center transform hover:-translate-y-2 transition-transform duration-300">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
