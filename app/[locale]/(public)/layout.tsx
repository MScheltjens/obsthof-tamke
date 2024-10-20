export default function PublicLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  // This layout is used for public pages
  return <>{children}</>;
}
