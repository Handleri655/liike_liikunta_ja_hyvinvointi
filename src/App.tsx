import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import { HomePage } from "./pages/HomePage"
import { ServicesPage } from "./pages/ServicesPage"
import { PtPage } from "./pages/PtPage"
import { PricingPage } from "./pages/PricingPage"
import { NewsPage } from "./pages/NewsPage"
import { HoursPage } from "./pages/HoursPage"
import { ContactPage } from "./pages/ContactPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="palvelut" element={<ServicesPage />} />
          <Route path="pt-valmennus" element={<PtPage />} />
          <Route path="hinnasto" element={<PricingPage />} />
          <Route path="ajankohtaista" element={<NewsPage />} />
          <Route path="aukioloajat" element={<HoursPage />} />
          <Route path="yhteystiedot" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
