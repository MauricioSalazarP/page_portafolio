import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "revert", paddingLeft: 15 }}>
            ¡Hola! Soy <span className="purpleb"><strong>Mauricio Salazar</strong></span> de <span className="purpleb">Bogotá, Colombia</span>.
            <br />
            <br />
            Tengo experiencia en el diseño, planificación y optimización de redes 2G-3G-4G, así como en el acompañamiento y evaluación de soluciones dedicadas tanto para negocios (B2B) como para consumidores (B2C). Además, cuento con habilidades en análisis estadístico de KPIs y evaluación de índices de calidad, así como en el manejo de bases de datos, herramientas OSS (Nokia - Huawei), software de analisis QoS - QoE como (TEMS - NEMO- NQDI).
            <br />
            <br />
            También me desempeño en el desarrollo de sitios web utilizando tecnologías como Wordpress, Django y React, así como en análisis geográficos con herramientas como QGIS y Google Earth.
            <br />
            <br />
            Mis principales disciplinas incluyen:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Ingeniería en sistemas Especialista en telecomunicaciones
            </li>
            <li className="about-activity">
              <ImPointRight /> Planeacion RF y Optimización de redes móviles
            </li>
            <li className="about-activity">
              <ImPointRight /> Desarrollo de herramientas Software
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
