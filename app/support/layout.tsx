import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import QuickExitButton from "@/components/QuickExitButton";

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      {/* Quick exit — fixed, always visible on all /support pages (doc 10 non-negotiable) */}
      <QuickExitButton />
      <main id="main-content" className="flex-1 pb-16 md:pb-0">
        {children}
      </main>
      <Footer />
    </>
  );
}
