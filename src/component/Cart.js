import '../style/Cart.css'

// PANIER
function Plants(){
    const monsteraPrice = 8;
    const lierrePrice = 10;
    const bouquetPrice = 15;
    return(
        <div className="lmj-cart">
            <h2>Panier</h2>
            <ul>
                <li>Monstera : { monsteraPrice }€</li>
                <li>Lierre : { lierrePrice }€</li>
                <li>Bouqeut de fleurs : { bouquetPrice }€</li>
            </ul>
            Total : {monsteraPrice + lierrePrice + bouquetPrice}€
        </div>
    )
}

// COMPILAGE DANS LA FONCTION CART
function Cart(){
    return (<div>
        <Plants />
        </div>)
}

export default Cart