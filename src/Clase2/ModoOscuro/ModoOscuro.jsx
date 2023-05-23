import "./ModoOscuro.css";
import { useState } from "react";

const ModoOscuro = () => {
  const [modoOscuro, setModoOscuro] = useState(false);

  const cambiarModo = () => {
    setModoOscuro(!modoOscuro);
  };

  const oscuro = modoOscuro ? "claro" : "oscuro";

  const claro = modoOscuro ? "oscuro" : "claro";

  return (
    <div id="container" className={claro}>
      <button id="Bmodo" className={oscuro} onClick={cambiarModo}>
        {" "}
        {modoOscuro ? "Withe mode" : "Black mode"}
      </button>
      <strong className="Pmodo">JUST DO IT</strong>
    </div>
  );
};

export default ModoOscuro;
