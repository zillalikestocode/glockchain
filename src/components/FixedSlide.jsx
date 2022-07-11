import React, { useState, useEffect} from 'react'
import btc from '../images/prices-btc.svg'
import eth from '../images/prices-eth.svg'
import { MdShoppingCart} from 'react-icons/md'
import { motion, AnimatePresence} from 'framer-motion'
import spin from '../images/spinningIcons.gif'

const FixedSlide = () => {

	return (
		<div className="flex items-center fixed rounded-full bg-lightBlue w-16 h-16 bottom-3 right-3 cursor-pointer">
				<img src={spin} alt="" width="50px" className="mx-auto"/>
		</div>
	)
} 

export default FixedSlide