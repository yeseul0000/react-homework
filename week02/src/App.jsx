import { useState } from "react";
import { ContentCard } from "./components/ContentCard"
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ul>
      {items.map(({id}) => {
        const photoUrl; //포켓호스트
        const photoAlt;

        return (
          <li key={id}>
            <ContentCard photo = {photoUrl} name = {photoAlt}/>
          </li>
        );
      })}
    </ul>
  );
}

export default App;
