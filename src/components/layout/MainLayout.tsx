import Sidebar from "./Sidebar";
import Header from "./Header";

// Bu component, Sidebar + Header + asıl sayfa içeriğini (children)
// bir araya getiren "iskelet". Her sayfa bu iskeletin içine yerleşecek.
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto bg-zinc-50 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}