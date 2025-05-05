import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });




type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const generateMetadata = ({ params, searchParams }: Props): Metadata => {
  const title = typeof searchParams?.title === 'string' ? searchParams?.title : 'Professional Portfolio';
  const description = typeof searchParams?.description === 'string' ? searchParams?.description : 'A showcase of my professional work and skills';
  const keywordsRaw = typeof searchParams?.keywords === 'string' ? searchParams?.keywords : 'developer, portfolio, JavaScript, React, Next.js, Node.js, Software engineer';
  const keywords = keywordsRaw.split(',').map(k => k.trim());

  return {
    title: `${title} | Raed Safsaf - Full Stack Engineer`,
    description,
    keywords,
    alternates: {
      canonical: {
        url: 'https://www.raedsafsaf.com',
      },
      languages: {
        'en-US': '/en-US',
        'fr-FR': '/fr-FR',
        'ar-AR': '/ar-AR',
      },
    },
    openGraph: {
      title,
      description,
      url: 'https://www.raedsafsaf.com',
      siteName: 'Raed Safsaf Portfolio',
      type: 'profile',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
     emails:"safsafraed@gmail.com",
     firstName:"Raed",
     lastName:"Safsaf",
     username:"safsafraed"
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/favicon.png',
      shortcut: ['/favicon.png'],
      apple: '/favicon.png',
    },
    other: {
      'linkedin:profile': 'https://www.linkedin.com/in/safsafraed',
      'github:profile': 'https://github.com/safsafmedraed',
    },
  };
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}