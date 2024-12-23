import HeaderNav from "../components2/headerNav/headerNav";
import Footer from "../components/footer/footer";
import MainDetails from "../components2/mainDetails/main-details";
export default function Details() {
  return (
    <div className="overflow-hidden font-Inter400 text-[#4f4f4f] bg-white">
        <HeaderNav mainHead="Shop Details" trackHead="Shop details" />
        <MainDetails />
        <Footer />
    </div>
  )
}
