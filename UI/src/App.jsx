import LeftMenu from "./views/LeftMenu"
import ProductTop from "./views/ProductTop"

import './app.css'

export default function App() {
  return (<div id="app">
    <div className="left-box bg-[#f2f3f6] p-[12px]">
      <ProductTop></ProductTop>
      <LeftMenu></LeftMenu>
    </div>
  </div>)
}
