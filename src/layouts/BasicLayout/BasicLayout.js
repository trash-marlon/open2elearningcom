import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function BasicLayout(props) {
  const { children } = props;
  console.log("process.env.NEXT_MAINTENANCE_MODE: " + process.env.NEXT_MAINTENANCE_MODE)
  return (
    <>
      <Header/>
       <main>
           { children }
       </main>
      <Footer/>
    </>
  );
}