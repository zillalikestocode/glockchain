const Button = ({ text, styles, type, onClick }) =>{
	return (
		<button className= {styles} type={type} onClick={onClick}>{text}</button>

	)
}

export default Button
