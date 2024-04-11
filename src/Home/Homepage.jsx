import CustomerReview from "../components/CustomerReview/CustomerReview"
import Luxury from "../components/Luxury/Luxury"
import Banner from "./Banner/Banner"

function Homepage() {
  return (
    <div>
      <Banner />
      <Luxury />
      <CustomerReview/>
    </div>
  )
}

export default Homepage