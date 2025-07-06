import clsx from 'clsx';
import {Inter} from 'next/font/google';
import {notFound} from 'next/navigation';
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import {ReactNode} from 'react';
import {locales} from '~/config';
import { CommonProvider } from '~/context/common-context';

const inter = Inter({subsets: ['latin']});

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
                                             children,
                                             params: {locale}
                                           }: Props) {

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Enable static rendering
  unstable_setRequestLocale(locale);


  return (
    <html className="h-full" lang={locale}>
    <head>
   

    {/* <!-- Google tag (gtag.js) --> */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-222LTKDS1Z"></script>
      <script
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-222LTKDS1Z');
                    `,
          }}

      />
      


    </head>
    <body suppressHydrationWarning={true} className={clsx(inter.className, 'flex min-h-screen flex-col bg-[url("/bgsprunkiphase1.jpg")] bg-cover bg-center bg-no-repeat bg-fixed')}>
    <CommonProvider>
      {children}
    </CommonProvider>
    </body>
    </html>
  );
}
