"use client";
import { useState } from "react";
import Image from "next/image";
const Home = () => {
  const [isEnglish, setIsEnglish] = useState(false);

  const text = {
    heroTitle: isEnglish ? "Transform Your Home" : "Transforma Tu Hogar",
    heroSubtitle: isEnglish ? "Experts in renovations" : "Expertos en reformas",
    ctaTitle: isEnglish
      ? "Ready to Transform Your Home?"
      : "¿Listo para transformar tu hogar?",
    ctaButton: isEnglish ? "Contact Us" : "Contáctanos",
    navLinks: isEnglish
      ? ["Home", "Services", "About Us", "Contact Us"]
      : ["Inicio", "Servicios", "Sobre Nosotros", "Contacto"],

      navLinksId: isEnglish
      ? ["home", "services", "aboutus", "contactus"]
      : ["inicio", "servicios", "sobrenosotros", "contacto"],
    contactTitle: isEnglish ? "Get in Touch" : "Ponte en Contacto",
    contactSubtitle: isEnglish
      ? "Contact us for a personalized quote."
      : "Contáctanos para una cotización personalizada.",
    emailLabel: isEnglish ? "Your email:" : "Tu correo electrónico:",
    subjectLabel: isEnglish ? "Subject:" : "Asunto:",
    messageLabel: isEnglish ? "Your message:" : "Tu mensaje:",
    submitButton: isEnglish ? "Send" : "Enviar",
    successMessage: isEnglish
      ? "Your message has been sent. We will get back to you shortly."
      : "Tu mensaje ha sido enviado. Le contestaremos en breve.",

    services: [
      {
        title: isEnglish ? "Interior Design" : "Diseño de interiores",
        description: isEnglish
          ? "The process of planning and designing the layout, aesthetics, and functionality of home interiors, considering the client's preferences and space optimization."
          : "Es el proceso de planificar y diseñar la distribución, estética y funcionalidad de los espacios interiores del hogar, teniendo en cuenta las preferencias del cliente y la optimización del espacio.",
      },
      {
        title: isEnglish ? "Complete Renovations" : "Reformas Integrales",
        description: isEnglish
          ? "This service covers the full remodeling of a home, from demolition to reconstruction, renovating all areas and systems to improve the entire house."
          : "Este servicio abarca la remodelación completa del hogar, desde la demolición hasta la reconstrucción, renovando todas las áreas y sistemas para mejorar la vivienda en su totalidad.",
      },
      {
        title: isEnglish ? "Partial Renovations" : "Reformas Parciales",
        description: isEnglish
          ? "This service focuses on improving or remodeling specific parts of the home, such as a room, bathroom, kitchen, or basement, rather than making changes throughout the whole house."
          : "En este caso, se enfocan en mejorar o remodelar solo partes específicas del hogar, como una habitación, el baño, la cocina o el sótano, en lugar de hacer cambios en toda la vivienda.",
      },
      {
        title: isEnglish
          ? "Electrical and Plumbing Installations"
          : "Instalaciones Eléctricas y de Fontanería",
        description: isEnglish
          ? "Updating or installing electrical and plumbing systems to ensure the safe and efficient operation of electrical and water networks."
          : "Actualización o instalación de sistemas eléctricos y de fontanería para garantizar el funcionamiento seguro y eficiente de las redes eléctricas y de agua.",
      },
      {
        title: isEnglish
          ? "Masonry and Carpentry"
          : "Albañilería y Carpintería",
        description: isEnglish
          ? "Includes construction tasks such as raising walls, building partitions, and performing structural renovations, as well as carpentry work like installing doors, windows, and furniture."
          : "Incluye trabajos de construcción como levantar muros, construir tabiques, realizar reformas estructurales, y también trabajos de carpintería como la instalación de puertas, ventanas, muebles, etc.",
      },
      {
        title: isEnglish ? "Painting and Finishes" : "Pintura y Acabados",
        description: isEnglish
          ? "Interior and exterior painting services, as well as the application of various decorative finishes to renew and enhance the home's aesthetics."
          : "Servicios de pintura interior y exterior, así como la aplicación de diferentes acabados decorativos para renovar y mejorar la estética del hogar.",
      },
      {
        title: isEnglish
          ? "Air Conditioning Systems Installation"
          : "Instalación de Sistemas de Climatización",
        description: isEnglish
          ? "Refers to the installation of heating, ventilation, and air conditioning systems to maintain a comfortable environment at home."
          : "Se refiere a la instalación de sistemas de calefacción, ventilación y aire acondicionado para mantener un ambiente confortable en el hogar.",
      },
      {
        title: isEnglish ? "Facade Renovation" : "Renovación de Fachadas",
        description: isEnglish
          ? "Refreshing or changing the home's exterior appearance by repairing the facade, cladding, and painting."
          : "Refrescar o cambiar la apariencia exterior del hogar mediante la reparación de la fachada, el revestimiento y la pintura.",
      },
      {
        title: isEnglish
          ? "Decoration and Furniture"
          : "Decoración y Mobiliario",
        description: isEnglish
          ? "Advice on choosing furniture, textiles, and decorative accessories to give the finishing touch to the home renovation."
          : "Asesoramiento en la elección de mobiliario, textiles y accesorios decorativos para dar el toque final a la remodelación del hogar.",
      },
    ],
  };

  return (
    <div>
      <Navbar
        isEnglish={isEnglish}
        setIsEnglish={setIsEnglish}
        navLinks={text.navLinks}
      />
      <Hero title={text.heroTitle} subtitle={text.heroSubtitle} linkiD={text.navLinksId} />
      <Services isEnglish={isEnglish} text={text} linkiD={text.navLinksId} />
      <AboutUs isEnglish={isEnglish} text={text} linkiD={text.navLinksId} />
      <CTA text={text} isEnglish={isEnglish}  linkiD={text.navLinksId} />
    </div>
  );
};

const Navbar = ({
  isEnglish,
  setIsEnglish,
  navLinks,
}: {
  isEnglish: boolean;
  setIsEnglish: (lang: boolean) => void;
  navLinks: string[];
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-[#e9aa51] p-4 flex justify-around items-center relative">
      <div className="text-xl font-bold">G&M Design</div>

      <button
        onClick={() => setIsEnglish(!isEnglish)}
        className=" px-3 py-1 bg-white border border-[#e9aa51] rounded hover:bg-orange-400 hover:text-white"
      >
        {isEnglish ? "ES" : "EN"}
      </button>

      <div className="lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-[#e9aa51] text-3xl"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      <ul
        className={`lg:flex space-x-4 py-2 ${
          isMenuOpen ? "block" : "hidden"
        } lg:block absolute lg:static bg-white lg:bg-transparent top-16 left-0 w-full lg:w-auto text-center lg:text-left`}
      >
        {navLinks.map((link, index) => (
          <li key={index}>
            <a
              href={`#${link.toLowerCase().replace(" ", "")}`}
              className="block py-2 lg:py-0 font-bold hover:text-amber-400"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Hero = ({ title, subtitle,linkiD }) => (
  <section
    id={linkiD[0]}
    className="relative h-screen flex items-center justify-center text-white"
  >
    {/* Imagen de fondo */}
    <div className="absolute inset-0 bg-black z-10">
      <Image
        src="/house.jpg"
        alt="Background Image"
        className="opacity-40"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>

    {/* Contenido sobre la imagen */}
    <div className="text-center z-10 max-w-2xl">
      <h1 className="sm:text-5xl text-4xl font-bold mb-4">{title}</h1>
      <p className="text-2xl">{subtitle}</p>
    </div>
  </section>
);

const Services = ({ isEnglish, text, linkiD}) => (
  <section id={linkiD[1]} className="py-16 bg-white p-10">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-12">
        {isEnglish ? "Our Services" : "Nuestros Servicios"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {text.services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-5xl text-blue-600 mb-4"></div>
            <h3 className="sm:text-lg text-md font-semibold text-gray-800 mb-4">
              {service.title}
            </h3>
            <p className=" sm:text-lg text-md text-gray-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AboutUs = ({ isEnglish, text, linkiD }) => (
  <section id={linkiD[2]} className="py-16 px-10 sm:px-48 bg-white">
    <div className="container mx-auto text-center px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        {isEnglish ? "About Us" : "Sobre Nosotros"}
      </h2>
      <p className="sm:text-lg text-md text-gray-600 mb-6">
        {isEnglish
          ? "Welcome to G&M Design, a leading company in the general renovations sector in Argentina. With a commitment to excellence and a customer-focused approach, we have been delivering high-quality services for the past 10 years, achieving incredible results that have exceeded our clients' expectations."
          : "Bienvenidos a G&M Design, una empresa líder en el sector de las reformas generales en Argentina. Con un compromiso de excelencia y un enfoque centrado en la satisfacción del cliente, hemos estado brindando servicios de alta calidad durante los últimos 10 años, logrando resultados increíbles que han superado las expectativas de nuestros clientes."}
      </p>
      <p className="sm:text-lg text-md text-gray-600 mb-6">
        {isEnglish
          ? "At G&M Design, we believe that every home has the potential to be transformed into a beautiful, functional, and personalized space. Our team of interior design experts and construction professionals works closely with our clients to understand their unique needs and desires, and then turn them into reality through our skills and expertise."
          : "En G&M Design, creemos que cada hogar tiene el potencial de ser transformado en un espacio hermoso, funcional y personalizado. Nuestro equipo de expertos en diseño de interiores y profesionales en construcción trabaja de la mano con nuestros clientes para comprender sus necesidades y deseos únicos, para luego convertirlos en realidad a través de nuestras habilidades y conocimientos."}
      </p>
      <p className="sm:text-lg text-md text-gray-600 mb-6">
        {isEnglish
          ? "Our comprehensive and partial renovation services range from small makeovers to larger projects. We take pride in offering creative solutions tailored to each budget while maintaining a high standard of quality across all our work."
          : "Nuestros servicios de reformas integrales y parciales abarcan desde pequeñas renovaciones hasta proyectos de mayor envergadura. Nos enorgullecemos de ofrecer soluciones creativas y adaptadas a cada presupuesto, manteniendo siempre un alto estándar de calidad en todos nuestros trabajos."}
      </p>
      <p className="sm:text-lg text-md text-gray-600">
        {isEnglish
          ? "Contact us today and discover why our results are truly incredible."
          : "Contáctanos hoy mismo y descubre por qué nuestros resultados son realmente increíbles."}
      </p>
    </div>
  </section>
);

const CTA = ({ isEnglish, text, linkiD }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mqakbnob", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(
          "There was an issue sending your message. Please try again."
        );
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <section id={linkiD[3]} className="py-16 bg-[#e9aa51] text-white text-center">
      <h2 className="text-3xl font-bold mb-4">{text.ctaTitle}</h2>
      <p className="mb-8 text-xl">{text.contactSubtitle}</p>

      {isSubmitted ? (
        <div className="text-lg font-semibold text-white">
          {text.successMessage || "Thank you for your message!"}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
          <div>
            <label htmlFor="email" className="block text-lg font-semibold mb-2">
              {text.emailLabel}
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full p-3 border border-gray-300 text-black rounded-md outline-none"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-lg font-semibold mb-2">
              {text.subjectLabel}
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              required
              className="w-full p-3 border text-black border-gray-300 rounded-md outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-semibold mb-2">
              {text.messageLabel}
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full p-3 border text-black border-gray-300 rounded-md outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#67481d] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#735730] transition duration-300"
          >
            {text.submitButton}
          </button>
          {errorMessage && (
            <div className="text-red-500 mt-4">{errorMessage}</div>
          )}
        </form>
      )}
    </section>
  );
};

export default Home;
