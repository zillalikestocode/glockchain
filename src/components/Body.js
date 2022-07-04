import WriteUp from './WriteUp'
import Button from './Button'
import PriceSlide from './PriceSlide'


const Body = ( { coins}) =>{
	return (
		<section className="w-full">
			<WriteUp />
		<PriceSlide coins={coins}/>
		</section>

	)
}

export default Body
