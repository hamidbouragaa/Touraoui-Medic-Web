import { getPostData, getAllPostSlugs } from '@/lib/blog';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths;
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    try {
        const postData = await getPostData(params.slug);
        return {
            title: `${postData.title} | Pharmacie Touraoui Medic`,
            description: postData.description,
        };
    } catch (error) {
        return {
            title: "Article non trouvé",
            description: "Cet article n'existe pas ou a été déplacé."
        }
    }
}


export default async function Post({ params }: { params: { slug: string } }) {
  try {
    const postData = await getPostData(params.slug);

    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 py-12 lg:py-20">
          <article className="container mx-auto max-w-4xl">
            <header className="mb-8 text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline mb-4">
                {postData.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                Publié le {format(new Date(postData.date), "d MMMM yyyy", { locale: fr })}
              </p>
            </header>
            
            <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden mb-12 shadow-lg">
                <Image
                    src={postData.image}
                    alt={postData.title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            
            <div
              className="prose prose-lg max-w-none prose-p:text-foreground/80 prose-headings:text-foreground prose-strong:text-foreground"
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
          </article>
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    notFound();
  }
}
