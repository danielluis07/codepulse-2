import { Details } from "@/components/details";
import { Cards } from "@/components/cards";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <div className="container py-4 px-5 sm:px-0 sm:w-[70%] sm:mx-auto">
        <About />
        <Details />
        <Cards />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
