import React from "react";
import { useHistory } from "react-router-dom";
function Concierto({ data, id }) {
  const history = useHistory();
  // console.log(data);
  return (
    <>
      <div className="info d-flex flex-column align-items-center justify-content-center h-100">
        <div className="pop-up-titulo">
          <h1>{data.titulo}</h1>
        </div>
        <div
          className="phone-img"
          style={{
            background: `url(${data.img})`,
            backgroundSize: "100% 100%",
          }}
        ></div>
        <div className="texto">
          {data.descripcion?
            <p className="lorem">{data.descripcion}</p>:
          <p className="lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            tincidunt, justo a feugiat consequat, massa erat elementum felis,
            non blandit magna tortor non diam. Suspendisse et suscipit massa, eu
            porttitor ex. Suspendisse eu tempor erat. Nullam ex dolor, ultricies
            in tempor quis, accumsan in ante.
          </p>
          }
          
            <p className="entradas">
              Esto es solo una muestra del video.
            </p>
          
        </div>
      </div>
      <div className="img-btn">
        <div
          className="img"
          style={{
            background: `linear-gradient(transparent 70%, rgba(255, 255, 255, 1)), linear-gradient(to Left, transparent 70%, rgba(255, 255, 255, 1)), url(${data.img})`,
            backgroundSize: "100% 100%",
          }}
        ></div>
        <div className="botones">
          <button className="primario">
            Ver
          </button>
          <div className="secondary-buttons">
            <button className="secundario" style={{ width: "50%" }}>
              Ver Trailer
            </button>
            <button className="secundario" style={{ width: "50%" }}>
              Relacionados
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Concierto;
