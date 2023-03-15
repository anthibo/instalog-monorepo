import { config } from '@/utils/config';
import ClientProvidersWrapper from '@/components/providers/ClientProvidersWrapper';

import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={config.locale}>
      <body>
        <div className='px-20 py-16'>
          <ClientProvidersWrapper>
            {children}
          </ClientProvidersWrapper>
        </div>
      </body>
    </html>
  );
}

export const metadata = {
  title: 'Instalog for active log tab',
};