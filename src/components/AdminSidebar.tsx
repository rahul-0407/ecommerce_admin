import { Link, useLocation,Location } from "react-router-dom"
import { RiDashboardFill,RiShoppingBag3Fill,RiCoupon3Fill } from "react-icons/ri"
import { AiFillFileText } from "react-icons/ai"
import {IoIosPeople } from "react-icons/io"
import { IconType } from "react-icons"
import { FaChartBar, FaChartLine,FaChartPie,FaStopwatch,FaGamepad } from "react-icons/fa"


const AdminSidebar = () => {
  const location = useLocation()

  return <aside>
    <h2>Logo.</h2>
    <div>
        <h5>DASHBOARD</h5>
        <ul>
          <Li url="/admin/dashboard" text="Dashboard" Icon={RiDashboardFill} location={location}></Li>
          <Li url="/admin/products" text="Product" Icon={RiShoppingBag3Fill} location={location}></Li>
          <Li url="/admin/customers" text="Customer" Icon={IoIosPeople} location={location}></Li>
          <Li url="/admin/transaction" text="Transaction" Icon={AiFillFileText} location={location}></Li>
        </ul>
    </div>
    <div>
        <h5>CHARTS</h5>
        <ul>
          <Li url="/admin/chart/bar" text="Bar" Icon={FaChartBar} location={location}></Li>
          <Li url="/admin/chart/pie" text="Pie" Icon={FaChartPie} location={location}></Li>
          <Li url="/admin/chart/line" text="Line" Icon={FaChartLine} location={location}></Li>
        </ul>
    </div>
    <div>
        <h5>APPS</h5>
        <ul>
          <Li url="/admin/app/stopwatch" text="Stopwatch" Icon={FaStopwatch} location={location}></Li>
          <Li url="/admin/app/coupon" text="Coupon" Icon={FaGamepad} location={location}></Li>
          <Li url="/admin/app/toss" text="Toss Game" Icon={AiFillFileText} location={location}></Li>
        </ul>
    </div>
  </aside>
}

interface LiProps {
    url:string,
    text:string,
    location:Location,
    Icon:IconType,
}

const Li = ({url,location,Icon,text}:LiProps) => (
<li
style={{
  backgroundColor:location.pathname.includes(url)?"rgba(0,115,255,0.1)":"white"
}}>
    <Link to={url} style={{color:location.pathname.includes(url)?"rgb(0,115,255)":"black"}}>
      <Icon/>
      {text}
    </Link>
</li>)


export default AdminSidebar
