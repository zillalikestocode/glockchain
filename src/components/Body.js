import WriteUp from './WriteUp'
import Button from './Button'
import PriceSlide from './PriceSlide'
import MoreInfo from './MoreInfo'
import Credits from './Credits'

const Body = ( { coins, navlinks, width}) =>{
	return (
		<section className="w-full">
			<WriteUp />
		<PriceSlide coins={coins}/>
		<MoreInfo links={navlinks} width={width}/>
			<div className="p-5 zero bg-darkBlue"><p className="text-white text-xl font-semibold mt-3">From crypto to zero in minutes</p><Button text="Get Started" styles='p-3 bg-white text-sky-600 rounded-md mt-5' /></div>
			<Credits />
		</section>

	)
}

export default Body
