import React from "react";
import Card from "react-bootstrap/Card";
import Iconoenvios from "../assets/Iconoenvios.png";
import Iconoretiros from "../assets/Iconoretiros.png";
import Iconopedidos from "../assets/Iconopedidos.png";

function Tarjetas() {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    margin: "0 35px",
    position: "relative",
  };

  const cardStyle = {
    width: "400px",
    margin: "10px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  };

  const titleStyle = {
    color: "#4F2D24",
    fontFamily: "Futura-Bold, sans-serif",
    fontWeight: "bold",
    fontSize: "40px",
    textAlign: "center",
  };

  const bodyStyle = {
    color: "black",
    fontFamily: "Futura-Medium, sans-serif",
    fontSize: "20px",
    textAlign: "center",
  };

  const imageStyle = {
    maxWidth: "100%",
    maxHeight: "200px",
    objectFit: "contain",
  };

  const cardBodyStyle = {
    overflow: "auto",
    maxHeight: "200px",
    paddingRight: "15px",
  };

  return (
    <div style={containerStyle}>
      <Card style={cardStyle}>
        <Card.Img
          variant="top"
          src={Iconopedidos}
          className="img-fluid"
          style={imageStyle}
        />
        <Card.Body style={cardBodyStyle}>
          <Card.Title style={titleStyle}>Pedidos</Card.Title>
          <Card.Text style={bodyStyle}>
            Escribinos por nuestras redes para cotización y realizar tu pedido.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={cardStyle}>
        <Card.Img
          variant="top"
          src={Iconoenvios}
          className="img-fluid"
          style={imageStyle}
        />
        <Card.Body style={cardBodyStyle}>
          <Card.Title style={titleStyle}>Envíos</Card.Title>
          <Card.Text style={bodyStyle}>
            Realizamos envíos a zona norte: Beccar, San Isidro, Martínez (sin
            cargo)
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={cardStyle}>
        <Card.Img
          variant="top"
          src={Iconoretiros}
          className="img-fluid"
          style={imageStyle}
        />
        <Card.Body style={cardBodyStyle}>
          <Card.Title style={titleStyle}>Retiros</Card.Title>
          <Card.Text style={bodyStyle}>
            Una vez realizado el pedido, te enviaremos información para el
            retiro de tu compra.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Tarjetas;
