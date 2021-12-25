import '../style/Banner.css'
import logo from '../assets/img/logo.png'

// PARAMETRAGE DU HEADER
function Header(){
    let title = "La maison de la Jungle"
    return (
    <div className="lmj-banner">
        <img src={logo} alt="Logo de la maison Jungle" className="lmj-logo" />
        <h1 className="lmj-title">{title}</h1>
    </div>
    )
}
// PARAMETRAGE D'UNE DESCRIPTION
  function Description() {
      return (<p>Ici achetez toutes les plantes dont vous avez toujours rêvé 🌵🌱🎍</p>)
}

// COMPILAGE DANS LA FONCTION BANNER
function Banner() {
    return (<div>
        <Header />
        <Description />
    </div>)
}
  
export default Banner