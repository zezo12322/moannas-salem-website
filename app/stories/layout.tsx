import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import QuickExitButton from "@/components/QuickExitButton";

export default function StoriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <QuickExitButton />
      <main id="main-content" className="flex-1 pb-16 md:pb-0">
        {children}
      </main>
      <Footer />
    </>
  );
}
