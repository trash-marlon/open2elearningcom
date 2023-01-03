import Maintenance from '../src/components/Maintenance'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Script from "next/script";
import Head from "next/head";


function MyApp({ Component, pageProps }) {
  console.log("NEXT_MAINTENANCE_MODE: ",  process.env.NEXT_MAINTENANCE_MODE)

  if (process.env.MAINTENANCE_MODE === 'false') {
     return (
     <> 
        <Component {...pageProps} />
     </>
     )
  }

  else {
    return <Maintenance/>
  }
  
}

export default MyApp
