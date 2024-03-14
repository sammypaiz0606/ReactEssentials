import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts() {
  return (
    <section id="core-concept">
      <h2>Core Concepts!</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept {...conceptItem} />
        ))}
      </ul>
    </section>
  );
}
