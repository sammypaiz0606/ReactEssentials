import { useState } from "react";
import TabButton from "./TabButton.jsx";

import { EXAMPLES } from "../data.js";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
  }
  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          label="components"
          isSelected={selectedTopic === "components"}
          onSelect={() => handleSelect("components")}
        />
        <TabButton
          label="jsx"
          isSelected={selectedTopic === "jsx"}
          onSelect={() => handleSelect("jsx")}
        />
        <TabButton
          label="props"
          isSelected={selectedTopic === "props"}
          onSelect={() => handleSelect("props")}
        />
        <TabButton
          label="state"
          isSelected={selectedTopic === "state"}
          onSelect={() => handleSelect("state")}
        />
      </menu>
      {tabContent}
    </section>
  );
}
