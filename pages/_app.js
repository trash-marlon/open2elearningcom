import Maintenance from '../src/components/Maintenance'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Script from "next/script";
import Head from "next/head";


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
  // console.log("NEXT_MAINTENANCE_MODE: " + process.env.NEXT_MAINTENANCE_MODE)
  // if (process.env.NEXT_MAINTENANCE_MODE === 'false') {
  //    console.log("A")
  //    return <Component {...pageProps} />
  // }

  // else {
  //   console.log("B")
  //   return <Maintenance/>
  // }
}

export default MyApp
