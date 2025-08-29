import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, Zap } from 'lucide-react';

const SpecialitesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12 lg:py-24 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">
              Nos Approches Complémentaires
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Découvrez nos expertises en homéopathie et en énergétique traditionnelle chinoise pour une prise en charge globale de votre bien-être.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="flex flex-col text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  <Leaf className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-headline">Homéopathie</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <CardDescription className="text-base text-muted-foreground">
                  L'homéopathie est une médecine douce qui vise à stimuler les capacités d'autoguérison du corps. En utilisant des substances d'origine végétale, minérale ou animale à des dilutions infinitésimales, elle offre une approche individualisée et respectueuse de l'équilibre de chacun, pour traiter en douceur les maux du quotidien comme les troubles chroniques.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="flex flex-col text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  <Zap className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-headline">Énergétique Chinoise</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <CardDescription className="text-base text-muted-foreground">
                  L'énergétique traditionnelle chinoise est une pratique millénaire qui repose sur l'harmonisation du "Qi", l'énergie vitale qui parcourt le corps. En tant que praticien, je vous accompagne pour identifier les déséquilibres énergétiques et vous conseiller des solutions personnalisées (pharmacopée, diététique, conseils de vie) pour restaurer votre vitalité et prévenir les troubles.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SpecialitesPage;