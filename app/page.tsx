import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import Main from "./components/main/Main";

export default function Home() {
  return (
    <>
      <section className="max-w-6/7  mx-auto">
        <Navbar />
        <Main />
        <Footer />
      </section>
    </>
  );
}
