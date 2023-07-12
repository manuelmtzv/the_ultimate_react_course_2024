import Pizza from "./Pizza";
import { pizzaData as pizzas } from "../../data";

export default function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {pizzas && pizzas.length > 0 && (
        <>
          <p>
            Authentic Itaila cuisine. 6 creative dishes to choose from. All from
            out stone oven, organic and delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza key={pizza.name} pizza={pizza} />
            ))}
          </ul>
        </>
      )}
    </main>
  );
}
