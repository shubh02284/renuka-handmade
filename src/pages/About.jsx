import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import renuka from "/images/renuka1.png";

function About() {
  return (
    <>
      <Navbar />

      <section className="bg-amber-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div>
              <img
                src={renuka}
                alt="Renuka"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>

            <div>
              <h1 className="text-5xl font-bold text-amber-900">
                Meet Renuka
              </h1>

              <p className="mt-6 text-lg text-amber-700 leading-relaxed">
                Hi, I'm Renuka, a passionate artist who loves transforming
                simple ideas into meaningful handmade creations.
              </p>

              <p className="mt-4 text-lg text-amber-700 leading-relaxed">
                From handmade paintings and pearl artwork to mirror décor
                and customized creative pieces, every creation is crafted
                with patience, creativity, and attention to detail.
              </p>

              <p className="mt-4 text-lg text-amber-700 leading-relaxed">
                Renuka Handmade is more than just art — it is a collection
                of handcrafted creations made with love, care, and passion.
              </p>

              <div className="mt-8">
                <a
                  href="https://instagram.com/tejra___renuka"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-amber-800 text-white px-6 py-3 rounded-lg"
                >
                  Visit Instagram
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;