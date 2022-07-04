import Button from './Button'

const WriteUp = ()=>{
	return (
		<div className=" md:px-10 p-5 writeup-bg w-full">
			<h4 className="md:text-5xl md:w-[700px] pt-32 text-2xl font-semibold text-white">The world's first popular way to shoot, destroy and eliminate Crypto.</h4>
			<p className="md:text-2xl text-white text-lg mt-3 md:font-semibold md:w-[800px]">Trusted by none since 2022 with over -$1 Trillion in crypto destructions.</p>
			<div className="flex mt-5 w-full mb-24">
				<Button text="Get Started" styles="bg-blue-500 rounded-lg mr-4 text-white p-3 px-4 md:text-xl w-full"/>
				<Button text="Log In"  styles="bg-white p-3 px-4 rounded-lg md:text-xl w-full"/>
			</div>
		</div>
	)
}

export default WriteUp
