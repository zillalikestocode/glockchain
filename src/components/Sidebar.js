import Button from './Button'
import { BiX  } from 'react-icons/bi'
import { motion, AnimatePresence } from 'framer-motion'

function Sidebar({ sidebar, setSidebar, links }){
	return (
		<motion.div initial={{ x: 100}} animate={{ x: 0}} exit={{ x: 100}} transition={{ type: "spring", bounce: 0, duration: 0.4 }} className={`fixed top-0 bottom-0 left-0 bg-white w-full h-screen z-10`}>
			<div className="flex items-center p-3 h-[4.75rem] bg-white border-b border-b-gray-200">
				<div className="flex text-2xl font-bold"><h4>Glockchain<span className="font-bold text-gray-400">.com</span></h4></div>
				<Button text={<BiX />} styles="text-4xl ml-auto p-2" onClick={() => { setSidebar(!sidebar)}}/>
			</div>
			<div className="bg-gray-200 pt-2 overflow-y-scroll h-[calc(100%-145px)]">
				<div className="p-4">
					<label htmlFor="" className="text-md text-gray-600">PRODUCTS</label>
				</div>
				<div className=" pl-0 bg-white">
					{ links.map((link) => {
							return (<li className="flex items-center p-3 hover:bg-gray-100 cursor-pointer w-full border-t border-t-gray-200" key={link.id}>
								<div className={` rounded-xl p-2 ${link.bg}`}>{ link.icon}</div>
								<div className="ml-3">
									<h4 className="text-base font-medium">{link.title}</h4>
									<p className="text-xs">{link.desc}</p>
								</div>
							</li>)
					})}
				</div>
			</div>
			<footer className="fixed bottom-0 flex border-t border-t-gray-200 bg-white px-3 w-full h-[70px] items-center justify-between">
					<Button text="Log In" styles=" border-[3px] border-blue-700 text-blue-700 rounded-lg py-3 w-full mx-2"/>
					<Button text="Sign Up" styles="bg-blue-700 py-3 rounded-lg text-white w-full mx-2 border-[3px] border-blue-700"/>
			</footer>
		</motion.div>
	)
}

export default Sidebar
