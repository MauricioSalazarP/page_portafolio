import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bienvenido Soy  <span className="purple">Mauricio Salazar </span>
            de <span className="purple"> Bogota, Colombia</span>
            <br /> Tengo experiencia en  diseño, planeación y optimización de redes 2G-3G-4G, acompañamiento y evaluacion de soluciones dedicadas B2B & B2C, analisis estadistico KPIs evaluacion de indices de calidad, manejo de bases de datos.
            <br />
            Adicionalmente trabajo en el desarrollo de sitios web con tecnologias como Wordpress, Django, React
            <br />
            <br />
            Principales disciplinas en que me desempeño
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Ingenieria Radio Frecuencia
            </li>
            <li className="about-activity">
              <ImPointRight /> Desarrollo de paginas WEB
            </li>
            <li className="about-activity">
              <ImPointRight /> Desarrollo de Software
            </li>
          </ul>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
