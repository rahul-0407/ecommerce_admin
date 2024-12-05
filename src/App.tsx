import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {Suspense, lazy} from "react"
import Loader from "./components/Loader"
const Dashboard = lazy(()=> import("./pages/Dashboard"))
const Product = lazy(()=> import("./pages/Products"))
const Customer = lazy(()=> import("./pages/Customers"))
const Transaction = lazy(()=> import("./pages/Transaction"))

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard/>}/>
        <Route path="/admin/products" element={<Product/>}/>
        <Route path="/admin/customers" element={<Customer/>}/>
        <Route path="/admin/transaction" element={<Transaction/>}/>
      </Routes>
      </Suspense>
    </Router>
  )
}

export default App
