"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

// Bu component, Sidebar + Header + asıl sayfa içeriğini (children)
// bir araya getiren "iskelet". Her sayfa bu iskeletin içine yerleşecek.
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto bg-zinc-50 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}