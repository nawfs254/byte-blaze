import { useEffect } from "react";
import { useState } from "react"
import { NavLink } from "react-router-dom";

function Nav() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const handleThemeToggle = (e) => {
        if (e.target.checked) {
            setTheme('synthwave')
        }
        else {
            setTheme('light')
        }
        console.log(theme)
    }
    return (
        <div className="h-16">

            <div className="navbar bg-base-100 flex-col md:flex-row px-2 md:px-10 shadow-lg fixed z-50">
                <div className="flex-1">
                    <a className="btn btn-ghost text-3xl text-primary gap-0">Byte<span className="text-secondary">Blaze</span></a>
                </div>
                <div className="hidden md:flex flex-none gap-4">
                    <ul className="menu menu-horizontal px-1 text-base space-x-4">
                        <NavLink to='/' className={({isActive}) => isActive?'font-bold text-primary' : 'font-bold'}>Home</NavLink>
                        <NavLink to='/blogs' className={({isActive}) => isActive?'font-bold text-primary' : 'font-bold'}>Blogs</NavLink>
                        <NavLink to='/bookmarks' className={({isActive}) => isActive?'font-bold text-primary' : 'font-bold'}>Bookmarks</NavLink>
                    </ul>
                    <label className="cursor-pointer grid place-items-center">
                        <input onChange={handleThemeToggle} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Nav
