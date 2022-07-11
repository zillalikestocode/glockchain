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
			<div className="p-5 zero bg-darkBlue">
			<div className="md-780:mx-auto md-780:text-center">
				<p className="text-white text-xl font-semibold mt-3 md-780:mx-auto md-780:text-2xl">From crypto to zero in minutes</p>
				<Button text="Get Started" styles='p-3 bg-white text-sky-600 rounded-md mt-5 text-base' />
			</div>
			</div>
			<Credits />
		</section>

	)
}

export default Body
