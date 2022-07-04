import { FaSearch } from "react-icons/fa";
import Button from "./Button"

const Search = ( { styles } ) =>{
	return (
		<div className={styles}>
			<Button text={(<FaSearch />)} styles="bg-gray-300/20 text-white rounded-full p-3 text-xl hover:bg-gray-300/40 transition-colors duration-300 ease-in-out"/>
			<Button text="Log in" styles="border border-2 m-4 border-white text-white text-sm transition-all duration-300 p-3 rounded-md py-2 hover:text-gray-300 hover:border-gray-300 ease-in-out"/>
			<Button text="Sign Up" styles=" bg-white p-3 py-2 text-sm rounded-lg border border-2 border-white hover:bg-gray-300 hover:border-gray-300 transition-all duration-300 ease-in-out"/>
		</div>

	)
}

export default Search
