import '@/app/globals.css';
import { Providers } from '@/components/providers';

export const metadata = {
  title: 'Aura',
  description: 'Aura',
  manifest: '/manifest.json',
  icons: {
    icon: '/assets/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
