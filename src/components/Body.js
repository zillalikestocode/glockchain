import WriteUp from './WriteUp'
import Button from './Button'
import PriceSlide from './PriceSlide'
import MoreInfo from './MoreInfo'


const Body = ( { coins, navlinks}) =>{
	return (
		<section className="w-full">
			<WriteUp />
		<PriceSlide coins={coins}/>
		<MoreInfo links={navlinks} />
		</section>

	)
}

export default Body
