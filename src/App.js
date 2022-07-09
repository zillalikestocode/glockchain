import Header from './components/Header'
import { useState } from 'react'
import './App.css'
import Body from './components/Body'
import Sidebar from './components/Sidebar'
import btc from './images/prices-btc.svg'
import eth from './images/prices-eth.svg'
import xlm from './images/prices-xlm.svg'
import deso from './images/prices-deso.png'
import wallet1 from './images/wallet-1.png'
import wallet2 from './images/wallet-2.png'
import wallet3 from './images/wallet-3.png'
import wallet4 from './images/wallet-4.png'
import wallet5 from './images/wallet-5.png'
import walletBg from './images/wallet-bg.png'
import explore1 from './images/explore-1.png'
import explore2 from './images/explore-2.png'
import explore3 from './images/explore-3.png'
import explore4 from './images/explore-4.png'
import exploreBg from './images/explore-bg.png'
import exchange1 from './images/exchange-1.png'
import exchange2 from './images/exchange-2.png'
import exchange3 from './images/exchange-3.png'
import exchange4 from './images/exchange-4.png'
import exchangeBg from './images/exchange-bg.png'
import instBg from './images/inst-bg.png'

function App() {
  const [ navlinks, setNavLinks] = useState([{
    id: 1,
    title: "Wallet",
	   desc: "Destroy Crypto",
	  theme: '!bg-purple-700',
	  border: '!border-purple-700',
     color: 'text-purple-700',
     bg: "bg-purple-100",
     bgBg: 'bg-purple-50',
     icon: <svg width="32" height="32" fill="none"><path d="M22 23V12h8v8a3 3 0 0 1-3 3h-5z" fill="#fff" stroke="#7349F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2 5.775v15.097a3 3 0 0 0 2.009 2.831l14 4.9A3 3 0 0 0 22 25.772V11.829a3 3 0 0 0-2.051-2.846L4.632 3.877A2 2 0 0 0 2 5.775zM16 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="#fff"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2 5.775v15.097a3 3 0 0 0 2.009 2.831l14 4.9A3 3 0 0 0 22 25.772V11.829a3 3 0 0 0-2.051-2.846L4.632 3.877A2 2 0 0 0 2 5.775zM16 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="#5322E5" fill-opacity=".36"></path><path d="M2.241 4.82a2.001 2.001 0 0 1 2.391-.943L19.95 8.983A3 3 0 0 1 22 11.829V12h8V6a3 3 0 0 0-3-3H5a3 3 0 0 0-2.759 1.82z" fill="#fff"></path><path d="M2.241 4.82a2.001 2.001 0 0 1 2.391-.943L19.95 8.983A3 3 0 0 1 22 11.829V12h8V6a3 3 0 0 0-3-3H5a3 3 0 0 0-2.759 1.82z" fill="#5322E5" fill-opacity=".36"></path><path d="M22 11.829v13.943a3 3 0 0 1-3.991 2.831l-14-4.9A3 3 0 0 1 2 20.872V5.775a2 2 0 0 1 2.632-1.898M22 11.83a3 3 0 0 0-2.051-2.846L4.632 3.877M22 11.83V12h8V6a3 3 0 0 0-3-3H5a3 3 0 0 0-2.759 1.82 2.001 2.001 0 0 1 2.391-.943M18 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" stroke="#7349F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>,
	  moreInfo: {
		  header: 'The Easiest and Most Powerful Crypto Wallet',
		  btnText: 'Get started',
		  bgImg: walletBg,
		  theme: 'purple',
		  details: [{
        id:1 ,
			  img: wallet1,
			  info: "Buy and Sell Crypto in Minutes",
			  extraInfo: 'Instantly buy Bicoin with credit card, debit card, or by linking your bank.'
		  },{
        id: 2,
			  img: wallet2,
			  info: 'Earn up to 10% in rewards'
		  },{
        id: 3,
			  img: wallet3,
			  info: 'Control you funds with Private Key Wallet'
		  },{
        id: 4,
			  img: wallet4,
			  info: 'At home or on the go'
		  },{
        id: 5,
			  img: wallet5,
			  info: 'All your crypto in one place'
		  }]
	  }

    },{
    id: 2,
    title: "Exchange",
	  desc: "Professional destruction",
    bg: "bg-sky-100",
    bgBg: 'bg-sky-50',
		border: 'border-sky-700',
    color: 'text-sky-600',
		theme: '!bg-sky-700',
	  icon: <svg width="32" height="32" fill="none"><path d="m12.5 13-.53-.848.53.848zM2 23H1v3l1.8-2.4L2 23zm11.227-10.455.531.847-.531-.847zm.997-.624.528.849.786-.489-.427-.821-.887.46zm3.47-1.984-.846.532.475.756.805-.387-.433-.9zM30 11.5l-.468.884L31 13.16v-1.66h-1zm-.327-7.862.891-.454-.891.454zm-1.311-1.311-.454.891.454-.891zm-24.724 0 .454.891-.454-.891zM2.327 3.638l.891.454-.891-.454zm9.643 8.514C7.827 14.742 3.241 19.68 1.2 22.4l1.6 1.2c1.959-2.612 6.373-7.34 10.23-9.752l-1.06-1.696zm.726-.454-.726.454 1.06 1.696.728-.456-1.062-1.694zm1-.626c-.323.201-.657.41-1 .626l1.062 1.694.995-.622-1.057-1.698zm1.415.388A.991.991 0 0 1 15 11h-2c0 .496.121.967.337 1.382l1.774-.922zM15 11a1 1 0 0 1 1-1V8a3 3 0 0 0-3 3h2zm1-1c.356 0 .67.185.848.47l1.693-1.065A2.998 2.998 0 0 0 16 8v2zm14.468.616c-3.012-1.594-5.342-2.478-7.424-2.707-2.127-.234-3.905.224-5.783 1.127l.867 1.802c1.64-.788 3.039-1.123 4.698-.94 1.704.187 3.767.93 6.706 2.486l.936-1.768zM29 6.8v4.7h2V6.8h-2zm-.218-2.708c.08.156.145.38.18.819C29 5.361 29 5.943 29 6.8h2c0-.824 0-1.501-.044-2.052-.046-.562-.145-1.079-.392-1.564l-1.782.908zm-.874-.874a2 2 0 0 1 .874.874l1.782-.908a4 4 0 0 0-1.748-1.748l-.908 1.782zM25.2 3c.857 0 1.439 0 1.889.038.438.035.663.1.819.18l.908-1.782c-.485-.247-1.002-.346-1.564-.392C26.702 1 26.024 1 25.2 1v2zM6.8 3h18.4V1H6.8v2zm-2.708.218c.156-.08.38-.145.819-.18C5.361 3 5.943 3 6.8 3V1c-.824 0-1.501 0-2.052.044-.562.046-1.079.145-1.564.392l.908 1.782zm-.874.874a2 2 0 0 1 .874-.874l-.908-1.782a4 4 0 0 0-1.748 1.748l1.782.908zM3 6.8c0-.857 0-1.439.038-1.889.035-.438.1-.663.18-.819l-1.782-.908c-.247.485-.346 1.002-.392 1.564C1 5.298 1 5.976 1 6.8h2zM3 23V6.8H1V23h2z" fill="#0C6CF2"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2 23c2-2.667 6.5-7.5 10.5-10l.727-.456.997-.624a2 2 0 1 0 3.47-1.984C21.214 8.246 24.05 8.35 30 11.5v13.7c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311c-.642.327-1.482.327-3.162.327H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 27.719 2 26.879 2 25.199v-2.2z" fill="#0C6CF2" fill-opacity=".36"></path><path d="m12.5 13-.53-.849.53.848zM2 23l-.8-.6-.2.266v.333h1zm11.227-10.456.531.847-.531-.847zm.997-.624.887-.461-.498-.959-.917.571.528.849zm3.47-1.984-.433-.901-1.01.485.597.948.847-.532zM30 11.5h1v-.602l-.532-.282L30 11.5zm-.327 16.862-.891-.454.891.454zm-1.311 1.311-.454-.891.454.891zm-24.724 0-.454.891.454-.891zm-1.311-1.311.891-.454-.891.454zm9.643-16.21C7.827 14.741 3.241 19.678 1.2 22.4l1.6 1.2c1.959-2.612 6.373-7.34 10.23-9.752l-1.06-1.696zm.726-.454-.726.454 1.06 1.696c.25-.155.492-.308.728-.456l-1.062-1.694zm1-.626c-.323.201-.657.41-1 .626l1.062 1.694.995-.622-1.057-1.698zm2.304.928a1 1 0 0 1-.889-.54l-1.774.922A3 3 0 0 0 16 14v-2zm1-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-.152-.53a.99.99 0 0 1 .152.53h2a2.99 2.99 0 0 0-.459-1.595l-1.693 1.064zm13.62.146c-3.012-1.594-5.342-2.478-7.424-2.707-2.126-.234-3.905.224-5.783 1.127l.867 1.803c1.64-.789 3.039-1.124 4.698-.942 1.704.188 3.767.931 6.706 2.487l.936-1.768zM31 25.2v-13.7h-2v13.7h2zm-.436 3.616c.247-.485.346-1.002.392-1.564.045-.55.044-1.228.044-2.052h-2c0 .857 0 1.439-.038 1.889-.035.438-.1.663-.18.819l1.782.908zm-1.748 1.748a4 4 0 0 0 1.748-1.748l-1.782-.908a2 2 0 0 1-.874.874l.908 1.782zm-3.616.436c.824 0 1.501 0 2.052-.044.562-.046 1.079-.145 1.564-.392l-.908-1.782c-.156.08-.38.145-.819.18-.45.037-1.032.038-1.889.038v2zm-18.4 0h18.4v-2H6.8v2zm-3.616-.436c.485.247 1.002.346 1.564.392.55.045 1.228.044 2.052.044v-2c-.857 0-1.439 0-1.889-.037-.438-.036-.663-.101-.819-.181l-.908 1.782zm-1.748-1.748a4 4 0 0 0 1.748 1.748l.908-1.782a2 2 0 0 1-.874-.874l-1.782.908zM1 25.199c0 .824 0 1.501.044 2.052.046.562.145 1.079.392 1.564l1.782-.908c-.08-.156-.145-.38-.18-.819C3 26.638 3 26.056 3 25.199H1zm0-2.2v2.2h2v-2.2H1z" fill="#0C6CF2"></path><path d="M16 16v14m-7-8v8m7-28v4m7 8v16M6.8 30h18.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C30 27.72 30 26.88 30 25.2V6.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C27.72 2 26.88 2 25.2 2H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 4.28 2 5.12 2 6.8v18.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 30 5.12 30 6.8 30zM18 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" stroke="#0C6CF2" stroke-width="2" stroke-linecap="round"></path></svg>,
	moreInfo: {
		  header: 'Lightning-Fast Crypto Trading',
		  btnText: 'Trade Now',
		  bgImg: exchangeBg,
		  theme: 'sky',
		  details: [{
        id: 1,
			  img: exchange1,
			  info: "Trade in 3 fiat currencies",
			  extraInfo: 'The Exchange supports USD, EUR and GBP.'
		  },{
        id:2,
        img: exchange2,
        info: 'A matching engine that can keep up with you'
      },{
        id:3,
        img: exchange3,
        info: '24/7 live chat support'
      },{
        id:4,
        img: exchange4,
        info: 'Margin Trading'
      }]
	  }
  },{
    id: 3,
    title: "Explorer",
	  desc: "Live Data, Charts & Transactions",
    bg: "bg-amber-100",
    bgBg: 'bg-amber-50',
		  border: 'border-amber-700',
		  theme: '!bg-amber-700',
    color: 'text-amber-600',
	  icon: <svg width="32" height="32" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M30.49 18.778 26.23 6.532a5.26 5.26 0 0 0-10.23 1.729A5.26 5.26 0 0 0 5.772 6.53L1.509 18.78a7.503 7.503 0 0 1 14.475 3.218L16 22l.016-.003a7.5 7.5 0 0 1 14.474-3.22z" fill="#F5A250" fill-opacity=".36"></path><path d="m26.229 6.532-.945.328.945-.328zm4.262 12.246-.932.363a1 1 0 0 0 1.876-.692l-.944.329zM15 8.26a1 1 0 1 0 2 0h-2zM5.77 6.53l.945.33-.944-.33zM1.51 18.78l-.945-.329a1 1 0 0 0 1.877.692l-.932-.363zm14.475 3.218-.998-.066a1 1 0 0 0 .799 1.046l.199-.98zM16 22l-.2.98a.998.998 0 0 0 .399 0l-.2-.98zm.016-.003.199.98a1 1 0 0 0 .799-1.046l-.998.066zM15 22a1 1 0 1 0 2 0h-2zm2-13.74a1 1 0 1 0-2 0h2zm8.284-1.4 4.262 12.246 1.889-.657-4.262-12.246-1.889.657zM21.261 4a4.26 4.26 0 0 1 4.023 2.86l1.89-.657A6.26 6.26 0 0 0 21.26 2v2zM17 8.26A4.26 4.26 0 0 1 21.26 4V2A6.26 6.26 0 0 0 15 8.26h2zM10.74 4A4.26 4.26 0 0 1 15 8.26h2A6.26 6.26 0 0 0 10.74 2v2zM6.714 6.86A4.26 4.26 0 0 1 10.74 4V2a6.26 6.26 0 0 0-5.913 4.203l1.89.657zM2.453 19.108 6.715 6.86l-1.889-.657L.564 18.45l1.89.658zM8.5 13a8.503 8.503 0 0 0-7.923 5.416l1.864.726A6.503 6.503 0 0 1 8.5 15v-2zm8.5 8.5A8.5 8.5 0 0 0 8.5 13v2a6.5 6.5 0 0 1 6.5 6.5h2zm-.018.562c.012-.186.018-.373.018-.562h-2c0 .145-.005.289-.014.431l1.996.131zm-.783-1.042-.016-.003-.398 1.96.016.003.398-1.96zm-.382-.003-.016.003.398 1.96.016-.003-.398-1.96zM15 21.5c0 .189.006.376.018.562l1.996-.13A6.626 6.626 0 0 1 17 21.5h-2zm8.5-8.5a8.5 8.5 0 0 0-8.5 8.5h2a6.5 6.5 0 0 1 6.5-6.5v-2zm7.922 5.415A8.503 8.503 0 0 0 23.5 13v2a6.503 6.503 0 0 1 6.059 4.14l1.863-.726zM17 22V8.26h-2V22h2z" fill="#F5A250"></path><path d="M8.5 29a7.5 7.5 0 0 0 7.5-7.5 7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0A7.5 7.5 0 1 0 8.5 29z" fill="#fff"></path><path d="M8.5 17a1 1 0 1 0 0 2v-2zm2.5 4.5a1 1 0 1 0 2 0h-2zM23.5 17a1 1 0 1 0 0 2v-2zm2.5 4.5a1 1 0 1 0 2 0h-2zm-11 0A6.5 6.5 0 0 1 8.5 28v2a8.5 8.5 0 0 0 8.5-8.5h-2zm8.5 6.5a6.5 6.5 0 0 1-6.5-6.5h-2a8.5 8.5 0 0 0 8.5 8.5v-2zm6.5-6.5a6.5 6.5 0 0 1-6.5 6.5v2a8.5 8.5 0 0 0 8.5-8.5h-2zM23.5 15a6.5 6.5 0 0 1 6.5 6.5h2a8.5 8.5 0 0 0-8.5-8.5v2zM17 21.5a6.5 6.5 0 0 1 6.5-6.5v-2a8.5 8.5 0 0 0-8.5 8.5h2zM8.5 15a6.5 6.5 0 0 1 6.5 6.5h2A8.5 8.5 0 0 0 8.5 13v2zM2 21.5A6.5 6.5 0 0 1 8.5 15v-2A8.5 8.5 0 0 0 0 21.5h2zM8.5 28A6.5 6.5 0 0 1 2 21.5H0A8.5 8.5 0 0 0 8.5 30v-2zm0-9a2.5 2.5 0 0 1 2.5 2.5h2A4.5 4.5 0 0 0 8.5 17v2zm15 0a2.5 2.5 0 0 1 2.5 2.5h2a4.5 4.5 0 0 0-4.5-4.5v2z" fill="#F5A250"></path></svg>,
    moreInfo: {
  		  header: 'Blockchain Data is in Our DNA',
  		  btnText: 'Explore Now',
  		  bgImg: exploreBg,
  		  theme: 'amber',
  		  details: [{
          id: 1,
  			  img: explore1,
  			  info: "Explore the top blockchains"
  		  },{
          id: 2,
          img: explore2,
          info: 'Powerful Blockchain Data API'
        },{
          id: 3,
          img: explore3,
          info: 'Industry-leading charts'
        },{
          id: 4,
          img: explore4,
          info: 'Real-time crypto prices'
        }]
      }
  },{
    id: 4,
    title: "Institutional",
	  desc: "Full-stack crypto destruction platform",
    bg: "bg-gray-100",
    color: 'text-gray-700',
		  theme: '!bg-gray-700',
    bgBg: 'bg-gray-50',
	  icon: <svg width="32" height="32" fill="none"><path d="M9.35 17.305V26M15.871 17.305V26M22.393 17.305V26" stroke="#121D33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M25.101 17.303a9.783 9.783 0 0 0-18.452 0H25.1z" fill="#121D33" fill-opacity=".36" stroke="#121D33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.871 10.783V1" stroke="#121D33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.871 5.348c2.174 0 3.261 2.174 6.522 2.174V3.174C19.132 3.174 18.045 1 15.87 1" fill="#121D33" fill-opacity=".36"></path><path d="M15.871 5.348c2.174 0 3.261 2.174 6.522 2.174V3.174C19.132 3.174 18.045 1 15.87 1" stroke="#121D33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path fill="#121D33" fill-opacity=".36" stroke="#121D33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M4.871 26h22v5h-22z"></path></svg>,
    moreInfo: {
  		  header: 'Bespoke crypto lending, trading, and custody for institutions',
  		  btnText: 'Become a client',
  		  bgImg: instBg,
  		  theme: 'gray',
        info: 'Blockchain.com Institutional Markets is a full-stack crypto services platform that works with crypto-native businesses and institutional clients on lending, trading, custody solutions tailored to your needs.'
  }}])

  const [ coins, setCoins] = useState([
    {
      id: 1,
      name: "Bitcoin",
      abv: "BTC",
      price: "$19,167.74",
      mvm: "-7.51%",
      icon: btc,
    },
    {
      id: 2,
      name: "Ethereum",
      abv: "ETH",
      price: "$1,054.79",
      mvm: "-10.92%",
      icon: eth,
    },
    {
      id: 3,
      name: "Stellar",
      abv: "XLM",
      price: "$0.11",
      mvm: "-9.71%",
      icon: xlm,
    },
    {
      id: 4,
      name: "DeSo",
      abv: "DESO",
      price: "$7.55",
      mvm: "",
      icon: deso,
    }
  ])

	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	window.addEventListener("resize", ()=>{
		setWindowWidth(window.innerWidth)
	})
	const [sidebar, setSidebar] = useState(false)

  return (
	  <>
    <Header links={navlinks} width={windowWidth} sidebar={sidebar} setSidebar={setSidebar}/>
	  { sidebar && <Sidebar sidebar={ sidebar } setSidebar={ setSidebar} links={navlinks}/>}
		<Body coins={coins} navlinks={navlinks}/>
	  </>
  );
}

export default App;
