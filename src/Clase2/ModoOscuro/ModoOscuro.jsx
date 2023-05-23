import "./ModoOscuro.css";
import { useState } from "react";

const ModoOscuro = () => {
  const [modoOscuro, setModoOscuro] = useState(false);

  const cambiarModo = () => {
    setModoOscuro(!modoOscuro);
  };

  const invertido = modoOscuro ? "claro" : "oscuro";

  const estilo = modoOscuro ? "oscuro" : "claro";

  return (
    <div id="container" className={estilo}>
      <button id="Bmodo" className={invertido} onClick={cambiarModo}>
        {" "}
        {modoOscuro ? "Withe mode" : "Black mode"}
      </button>
      <strong className="Pmodo">JUST DO IT</strong>
    </div>
  );
};

export default ModoOscuro;
