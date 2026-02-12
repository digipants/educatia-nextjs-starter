
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{padding:20, color:'red',fontWeight:'bold'}}>Coming Really Soon</header>
        {children}
        <footer style={{padding:20}}>© Educatia Welfare Trust</footer>
      </body>
    </html>
  );
}
