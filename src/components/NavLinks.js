function NavLinks({ links }){
	return (
		<div className="ml-4 flex mr-auto">
			{links.map((link) => (
				<div key={link.id} className="transition-colors text-gray-300 hover:text-white duration-300  ease-in-out hover:bg-gray-300/20 m-1 rounded h-7 items-center flex"><a href="#" className=" p-2">{link.title}</a></div>
			))}
		</div>
	)
}

export default NavLinks
