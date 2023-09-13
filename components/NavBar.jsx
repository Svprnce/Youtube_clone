// Import ICON Images of Menu
import { memo } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector"
import useMobileDetect from "../Hooks/useMobiledetect";
import {menu_content_closed, menu_content_open } from "../constant/menudetails";




const MobileNav = memo(()=>{
    return (
        <div className="closed_nav">
            <ul className="closed_nav_ul">
                {menu_content_closed.map((c,i)=>{
                    return(
                        <li key={i} className="closed_nav_li">
                            <p>{c.name}</p>
                        </li>
                    )
                })}
                
            </ul>
        </div>
    )
})
const DesktopNav = memo(()=>{
    return (
        <nav>
            {
                menu_content_open.map((c, i) => {
                    return (
                        (c.heading ? (<div key={i} className="nav">
                            <h3 className="nav_heading">{c.heading}</h3>
                            <ul>
                                {c.content.map((c, i) => {
                                    return (<li className="nav_li">{c.name}</li>)
                                })}
                            </ul>
                        </div>) : (<ul className="nav">
                            {c.content.map((c, i) => {
                                return (<li className="nav_li">{c.name}</li>)
                            })}

                        </ul>))
                    )
                })
            }
        </nav >
    )
})
const NavBar = () => {
    const isMenuopened = useSelector((state) => state.Menu_redux.isMenuopen)
    let ismobile = useMobileDetect()
    const path = useLocation()
    const iswatchpage = path.pathname.split('/').includes('watch')
    return (

        (!ismobile ? (isMenuopened ? (iswatchpage ? (null):(<DesktopNav/>)) : (!iswatchpage ? null:(<MobileNav/>)))  : (!isMenuopened ? (<MobileNav/>) : null) )
    )
}

export default memo(NavBar)