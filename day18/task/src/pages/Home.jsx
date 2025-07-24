import { Button } from "bootstrap";
import Buttons from "../components/Buttons";
import Items from "../components/Items";

function Home({ items, operations, content }) {
  return (
    <>
      <div className="row">
        {items.map((item) => {
          return (
            <div key={item.id}>
              <Items item={item} operation={operations}></Items>
            </div>
          );
        })}
      </div>
      <Buttons operation={operations.reset} content={content.reset}></Buttons>
    </>
  );
}

export default Home;
