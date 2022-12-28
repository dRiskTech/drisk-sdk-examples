// import { useState } from "react";
// import { useRouter } from "next/router";
import driskSDK from "@driskcover/drisk-sdk";
import { useState } from "react";
import '../src/sdk.css'

const Sdk = () => {
  const [crypto, setCrpyto] = useState("BTC") 
  const [screen, setScreen] = useState("COVER") 
  const [trade, setTrade] = useState("BUY") 
  const [environment, setEnvironment] = useState("STAGING") 
  const [cryptoQt, setcryptoQt] = useState()
  const [key, setKey] = useState("Wy9K3Tm4h7edp7XNx0869zE5DifHBBh6DUEeehg9t38=")
  // ! states used
  // const router = useRouter();

  // ! Methods

  // * login handler
  const loginHandler = (crypto,cryptoQt,screen,trade,environment,key) => {

    let drisk = new driskSDK({
      apiKey: key, // Your API Key (Required)
      environment: environment, // STAGING/PRODUCTION (Required)
      crypto: crypto,
      cryptoQty: cryptoQt,
      tradeType: trade,
      themeColor: "fffff", // App theme color in hex
      hostURL: window.location.origin, // Required field
      widgetHeight: "750px",
      widgetWidth: "500px",
      partnerCustomerId: "user-1",
      screenName: screen
    });

    //Initialize
    drisk.init();

    //On Initialize
    drisk.on(drisk.EVENTS.DRISK_WIDGET_INITIALISED, (event) => {
      console.log("initialized", event);
    });

    //Event Handler
    drisk.on(drisk.EVENTS.DRISK_COVER_PURCHASE_SUCCESS, (orderData) => {
      console.log(orderData);
    });

    //Close Widget
    // setTimeout(()=> {
    //   drisk.close();
    // }, 5000);
  };

  const handleSubmit = (e) =>{
      e.preventDefault();
      loginHandler(crypto,cryptoQt,screen,trade,environment,key);
        
  }

  console.log(crypto, cryptoQt,screen,trade,environment,key);


  return (
    <div>
  <form action="" className="form" onSubmit={handleSubmit}>
       <div className="row">
            <label htmlFor="" className="lable">Crypto</label>
            <select className="options1" value={crypto} onChange={(e)=>setCrpyto(e.target.value)}>
               <option value="BTC">BTC</option>
               <option value="ETH">ETH</option>
            </select>
       </div>
       <div className="row">
            <label htmlFor="" className="lable">Trade Type</label>
            <select className="options2" value={trade} onChange={(e)=>setTrade(e.target.value)}>
               <option value="BUY">BUY</option>
               <option value="SELL">SELL</option>
            </select>
       </div>
       <div className="row">
            <label htmlFor="" className="lable">Screen Name</label>
            <select className="options3" value={screen} onChange={(e)=>setScreen(e.target.value)}>
               <option value="COVER">COVER</option>
               <option value="DASHBOARD">DASHBOARD</option>
            </select>
       </div>
       <div className="row">
            <label htmlFor="" className="lable">Environment</label>
            <select className="options4" value={environment} onChange={(e)=>setEnvironment(e.target.value)}>
               <option value="STAGING">STAGING</option>
               <option value="PRODUCTION">PRODUCTION</option>
            </select>
       </div>
       <div className="row">
            <label htmlFor="" className="lable">Api Key</label>
            <input type="text" placeholder="4.5 USDT" className="inp1" value={key} onChange={(e)=>setKey(e.target.value)}/>
       </div>
       <div className="row">
            <label htmlFor="" className="lable">Coin Quantity</label>
            <input type="text" placeholder="4.5 USDT" className="inp2" value={cryptoQt} onChange={(e)=>setcryptoQt(e.target.value)}/>
       </div>
       <div
          // onClick={(e) => {
          //   e.preventDefault();
          //   loginHandler();
          // }}
        >
          <button type="submit" style={{border:"1rem solid #fffff",
           padding:"0.8rem 2rem",
           background:"#ffb902",
           border:"none",
           borderRadius:"0.3rem" 
          }}
          >Launch</button>
        </div>
  </form>
    </div>
  );
};

export default Sdk;