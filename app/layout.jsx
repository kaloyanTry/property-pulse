import '@/assets/styles/globals.css';

export const metadata = {
  title: 'PropertyPulse | Find the Perfect Track',
  description: 'FInd your dream rental property',
  keywords: 'rental, find rentals, find properties',
};

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
