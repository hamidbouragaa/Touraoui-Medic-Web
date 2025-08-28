'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import { MapPin } from 'lucide-react';

export default function MapSection() {
  const Map = useMemo(
    () =>
      dynamic(() => import('./map'), {
        ssr: false,
        loading: () => (
          <div className="h-[450px] w-full bg-muted flex flex-col items-center justify-center text-center p-4 rounded-lg">
            <MapPin className="w-12 h-12 text-muted-foreground mb-4 animate-pulse" />
            <p className="text-sm text-muted-foreground">
              Chargement de la carte...
            </p>
          </div>
        ),
      }),
    []
  );

  return (
    <section id="location" className="py-12 lg:py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            Notre Emplacement
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Retrouvez-nous au cœur de Kelaa M'Gouna. Nous sommes facilement
            accessibles pour tous vos besoins en santé.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-xl border max-w-5xl mx-auto h-[450px]">
          <Map />
        </div>
      </div>
    </section>
  );
}
