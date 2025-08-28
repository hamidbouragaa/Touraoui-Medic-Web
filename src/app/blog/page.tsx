import Link from 'next/link';
import Image from 'next/image';
import { getPaginatedPosts } from '@/lib/blog';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Pagination from '@/components/pagination';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const POSTS_PER_PAGE = 3;

export default function BlogPage({ searchParams }: { searchParams?: { page?: string } }) {
  const currentPage = Number(searchParams?.page) || 1;
  const { posts, totalPages } = getPaginatedPosts(currentPage, POSTS_PER_PAGE);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-12 lg:py-24 bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">
                Notre Blog Santé
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Conseils, actualités et informations pour prendre soin de votre santé au quotidien.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Card key={post.slug} className="overflow-hidden flex flex-col group">
                   <Link href={`/blog/${post.slug}`} className="block">
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </Link>
                  <CardHeader>
                    <p className="text-sm text-muted-foreground">
                        {format(new Date(post.date), "d MMMM yyyy", { locale: fr })}
                    </p>
                    <CardTitle className="leading-tight">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{post.description}</CardDescription>
                  </CardContent>
                  <div className="p-6 pt-0">
                      <Button asChild variant="link" className="p-0">
                        <Link href={`/blog/${post.slug}`}>
                            Lire la suite
                        </Link>
                      </Button>
                  </div>
                </Card>
              ))}
            </div>

            {totalPages > 1 && (
                <Pagination currentPage={currentPage} totalPages={totalPages} baseUrl="/blog" />
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
