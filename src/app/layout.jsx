import './globals.css';

export const metadata = {
  title: 'Dirt Cheap Store',
  description: 'Next.js E-commerce Store',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
