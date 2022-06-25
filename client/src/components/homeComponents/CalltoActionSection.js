import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>¿Necesitas lecciones de música?</h2>
              <p>Suscribete gratis a nuestro Newsletters para enviar los mejores cursos y ofertas de nuestra tienda</p>
              <form className="form-section">
                <input placeholder="Ingresa tu correo..." name="email" type="email" />
                <input value="Suscribirse" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
