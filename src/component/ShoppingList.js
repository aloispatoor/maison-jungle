import { plantList } from '../data/plantList'

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
                {plantList.map((plant) => (
                    <li key={plant.id}>
                        {plant.name}
                        {plant.isBestSale && <span>🔥</span>}
                        <div>
                        {plant.isSpecialOffer && <span>{solde}</span>}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList