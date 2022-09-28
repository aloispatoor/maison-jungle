import { plantList } from '../data/plantList'
import PlantItem from './PlantItem'
import '../style/ShoppingList.css'

function ShoppingList(){
    const solde = 'Soldes'
    const categories = plantList.reduce(
        (acc, plant) =>
        acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )
    return (
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul>
                {plantList.map(({ id, name, water, light }) => (
                    <PlantItem
                        id={id}
                        name={name}
                        water={water}
                        light={light}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList