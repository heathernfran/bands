import { useState } from "react";

import skaBand from "./band-json/ska-band.json";
import kpopBand from "./band-json/kpop-band.json";
import punkBand from "./band-json/punk-band.json";
import { BandForm } from "./components/BandForm";

function App() {
  const [bands] = useState([skaBand, kpopBand, punkBand]);

  return (
    <div className="App">
      {bands.map((band) => (
        <BandForm band={band} key={band.id} />
      ))}
    </div>
  );
}

export default App;
