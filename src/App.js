import { Fragment, useState } from "react";
import Globe from "./globe";
export default function App() {
  const [selected, setSelected] = useState("date");
  return (
    <div>
      <Globe selected={selected} />
    </div>
  );
}
