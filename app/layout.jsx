import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'PropertyPulse | Find the Perfect Track',
  description: 'FInd your dream rental property',
  keywords: 'rental, find rentals, find properties',
};

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
