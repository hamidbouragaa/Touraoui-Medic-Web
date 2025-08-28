import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import Link from 'next/link';

const articles = [
  {
    title: '5 conseils pour une alimentation saine',
    description: 'Découvrez des astuces simples pour améliorer votre alimentation au quotidien et renforcer votre système immunitaire.',
    image: 'https://picsum.photos/600/400?random=1',
    slug: 'alimentation-saine',
    hint: 'healthy food'
  },
  {
    title: 'L\'importance de l\'hydratation',
    description: 'Savez-vous combien d\'eau boire par jour ? Apprenez pourquoi une bonne hydratation est essentielle pour votre corps.',
    image: 'https://picsum.photos/600/400?random=2',
    slug: 'hydratation',
    hint: 'water glass'
  },
  {
    title: 'Gérer le stress pour un meilleur bien-être',
    description: 'Le stress chronique peut affecter votre santé. Explorez des techniques de relaxation et de gestion du stress.',
    image: 'https://picsum.photos/600/400?random=3',
    slug: 'gestion-stress',
    hint: 'yoga meditation'
  },
];

export default function HealthResources() {
  return (
    <section id="health-resources" className="py-12 lg:py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            Ressources et Conseils Santé
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Restez informé avec nos articles sur la santé et le bien-être, pertinents pour notre communauté.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Card key={article.title} className="overflow-hidden flex flex-col">
              <Link href={`/blog/${article.slug}`} className="block group">
                <div className="relative h-48 w-full">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    data-ai-hint={article.hint}
                  />
                </div>
              </Link>
              <CardHeader>
                <CardTitle>
                  <Link href={`/blog/${article.slug}`} className="hover:text-primary transition-colors">
                    {article.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{article.description}</p>
              </CardContent>
              <div className="p-6 pt-0">
                  <Button asChild variant="link" className="p-0">
                    <Link href={`/blog/${article.slug}`}>
                        Lire la suite
                    </Link>
                  </Button>
              </div>
            </Card>
          ))}
        </div>
         <div className="mt-12 text-center">
            <Button asChild size="lg">
                <Link href="/blog">Voir tous les articles</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
