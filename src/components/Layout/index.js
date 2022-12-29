import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      {/*<span className="tags top-tags">&lt;body&gt;</span>*/}
      <div className="page">

        <Outlet />
      </div>
      {/*<span className="tags bottom-tags">*/}
      {/*    &lt;/body&gt;*/}
      {/*  <br />*/}
      {/*    <span className="bottom-tag-html">&lt;/html&gt;</span>*/}
      {/*  </span>*/}
    </div>
  )
}

export default Layout
