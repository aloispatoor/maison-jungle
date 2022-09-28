import { useState } from "react"
import '../style/Footer.css'



function Footer(){
    const [inputValue, setInputValue] = useState('')

    function handleInput(e) {
		setInputValue(e.target.value)
	}

    function checkValue(){
        if(!inputValue.includes('@')){
            alert("Attention, ceci n'est pas une adresse email valide")
        }
    }

    return (
        <footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={checkValue}
			/>
		</footer>
    )
}

export default Footer