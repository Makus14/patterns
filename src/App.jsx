import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>

        <Accordion className="accordion">
          <AccordionItem
            id="experience"
            className="accordion-item"
            title="We got 20 years of experience"
          >
            <article>
              <p>You can&apos;t go wrong with us.</p>
              <p>
                We are in the business of planning highly individualizes
                vacation trips for more than 20 years
              </p>
            </article>
          </AccordionItem>
          <AccordionItem
            id="local-guides"
            className="accordion-item"
            title="We're working with local guides"
          >
            <article>
              <p>We are not doing this along from our office.</p>
              <p>
                We are in the business of planning highly individualizes
                vacation trips for more than 20 years
              </p>
            </article>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
