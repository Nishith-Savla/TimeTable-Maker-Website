import { useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";

import "./styles/root.scss";

function App() {
  /* eslint no-unused-vars: "off" */
  const [selectedComponents, setSelectedComponents] = useState({
    subject: null,
    teacher: null,
  });

  const handleComponentSelect = (component, type) =>
    setSelectedComponents(previouslySelectedComponents => {
      return {
        ...previouslySelectedComponents,
        [type]: selectedComponents[type] === component ? null : component,
      };
    });

  return (
    <>
      <Header
        selectedComponents={selectedComponents}
        onComponentSelect={handleComponentSelect}
      />
      <Body
        selectedComponents={selectedComponents}
        onComponentSelect={handleComponentSelect}
      />
    </>
  );
}

export default App;
