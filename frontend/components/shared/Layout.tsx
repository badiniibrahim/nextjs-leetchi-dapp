import Footer from "./Foot";
import Header from "./Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row justify-between">
      {children}
    </div>
  );
}
