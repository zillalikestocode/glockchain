import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'
const Credits= () => {
	return (
		<div className='mt-5 px-5'>
			<h4 className='text-2xl font-bold'>GlockChain</h4>
			<p className='text-lg font-medium'>Created by Emmanuel Ngoka </p>
			<div className='text-indigo-600 flex'>
				<a href="https://www.github.com/zillalikestocode" className='m-3 ml-0'><span><FaGithub size={20} /></span></a>
				<a href="https://www.twitter.com/zillathefirstt" className='m-3'><span><FaTwitter size={20}/></span></a>
				<a href="https://www.instagram.com/the_emmanuelngoka" className='m-3'><span><FaInstagram size={20} /></span></a>
			</div>
		</div>
	)
}
export default Credits
