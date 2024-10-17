export default function Layout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <div>Authentication Layout</div>
      {children}
    </div>
  );
}
