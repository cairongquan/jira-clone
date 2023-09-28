import LeftMenu from "./views/LeftMenu"
import ProductTop from "./views/ProductTop"
import ProjectHeader from "./components/Header";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import router from "./router"
import './app.css'

export default function App() {
  const current = location.href;
  return (
    <Router>
      <div id="app">
        <ProjectHeader></ProjectHeader>
        <div className="app-content">
          {
            !current.includes('manage') &&
            <div className="left-box bg-[#f2f3f6] p-[12px]">
              <ProductTop></ProductTop>
              <LeftMenu></LeftMenu>
            </div>
          }
          <div className="right-box">
            <Routes>
              {router.map((route, index) => (
                <Route key={index} path={route.path} element={route.component()} />
              ))}
            </Routes>
          </div>
        </div>
      </div>
    </Router>)
}
