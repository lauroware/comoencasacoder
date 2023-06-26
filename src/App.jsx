import React, { useState, useEffect } from "react";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import "./App.css";
import BANNERFINAL from "./assets/BANNERFINAL.png";
import fotojp from "./assets/fotojp.png";
import Tarjetas from "./components/tarjetas.jsx";
import EventosEspeciales from "./components/eventosespeciales.jsx";
import imagenesDulce from "./exports/imagenesDulce.js";
import imagenesSalado from "./exports/imagenesSalado.js";
import imagenesTorta from "./exports/imagenesTorta.js";
import Slider from "./components/Slider.jsx";

const boxStyle = {
  backgroundColor: "#04545c",
  padding: "10px",
  display: "flex",
  alignItems: "center",
  flex: "1",
  margin: "0",
  marginRight: "10px", // Ajustado el margen derecho
  border: "1px solid black",
};

const buttonStyle = {
  margin: "5px",
  padding: "10px",
  backgroundColor: "#FFFFFF",
  color: "#4F2D24",
  border: "none",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const iconStyle = {
  width: "35px",
  height: "35px",
  marginRight: "5px",
};

const textStyle = {
  fontFamily: "Futura, sans-serif",
  color: "#FFFFFF",
  fontSize: "16px",
  width: "100%",
};

const bannerStyle = {
  width: "100vw",
};

const containerStyle = {
  margin: "0",
  padding: "0",
  width: "100%",
  display: "flex",
  justifyContent: "center", // Cambiado a "center"
};

const imageStyle = {
  margin: "5%", // Cambiado a un valor en porcentaje
  maxWidth: "100%", // Ajusta el tamaño máximo de la imagen
};

const contentStyle = {
  marginTop: "70px", // Agrega margen superior para el contenido
};

function App() {
  const [count, setCount] = useState(0);
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const isScrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;

      setShowFooter(isScrolledToBottom);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app-container">
      <Header />
      <div className="content" style={contentStyle}>
        <img
          src={BANNERFINAL}
          alt="Foto Juan Pablo"
          style={{ ...bannerStyle, marginRight: 0 }}
          className="banner"
        />

        <Tarjetas />

        <h1 style={{ textAlign: "center", fontFamily: "Futura, sans-serif" }}>
          Dulce
        </h1>
        <Slider images={imagenesDulce} />
        <h1 style={{ textAlign: "center", fontFamily: "Futura, sans-serif" }}>
          Salado
        </h1>
        <Slider images={imagenesSalado} />
        <h1 style={{ textAlign: "center", fontFamily: "Futura, sans-serif" }}>
          Tortas
        </h1>
        <Slider images={imagenesTorta} />

        <EventosEspeciales />

        <div style={containerStyle}>
          <div className="box-container1" style={boxStyle}>
            <img src={fotojp} alt="Foto Juan Pablo" style={imageStyle} />
            <h3 style={{ ...textStyle, textAlign: "left" }}>
              <span style={{ fontWeight: "bold", fontSize: "24px" }}>
                Sobre mí.
              </span>
              <br />
              Mi nombre es Juan Pablo Sayag, soy Chef-Pastelero profesional y
              creador de “Como en Casa norte y sur”.
              <br />
              Mi vocación por la cocina comenzó desde muy temprana edad cuando
              pasaba fines de semana enteros mirando programas como “El
              Gourmet”, “Todo Dulce”, los Petersens, escuchando a Osvaldo Gross,
              Ariel Rodriguez Palacios, quería aprender cada técnica, ¡cada
              detalle y quería probar todos los sabores también!
              <br />
              En el año 2003 terminé el colegio y comencé inmediatamente a
              estudiar cocina en el Instituto Argentino de Gastronomía (IAG),
              donde egresé en el 2008 con dos hermosos honores: recibir mi
              título de la mano de Ariel Rodriguez Palacios y ser evaluado en
              gastronomía por Osvaldo Gross.
              <br />
              A partir de allí mi camino de aprendizaje nunca se detuvo, realicé
              cursos de macarons, chocolatería, diseño y armado de tortas y
              comencé a cocinar para amigos, para familiares hasta que en 2009
              decidí crear mi propio negocio gastronómico: "Como en Casa Norte y
              Sur". <br />
              Crecí rodeado de grandes maestros y sabores, la cocina de mi
              abuela y mi madre han dejado huella en mi estilo gastronómico y
              eso mismo es lo que quiero transmitir a través de mis
              preparaciones, que lleves a tu mesa y a tu familia opciones dulces
              y saladas como las que comerías en tu casa.
              <br />
              Actualmente en “Como en Casa” ofrecemos una amplia variedad de
              tortas, cookies, macarons, sandwiches de miga (con opciones
              vegetarianas), comidas caseras para resolver el día a día,
              catering para eventos y muchos más.
              <br />
              Contáctame y armemos algo a tu medida.
              <br />
              Juampi.
            </h3>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
