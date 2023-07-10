import Pizza from './Pizza'
import { pizzaData } from '../../data'

export default function Menu() {
  return (
    <main className='menu'>
      <h2>Our menu</h2>

      <ul className='pizzas'>
        {pizzaData.map((pizza) => (
          <Pizza key={pizza.name} pizza={pizza} />
        ))}
      </ul>
    </main>
  )
}
