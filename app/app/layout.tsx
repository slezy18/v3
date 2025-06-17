export const metadata = {
  title: 'BetByte Casino',
  description: 'Test your luck at BetByte!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
