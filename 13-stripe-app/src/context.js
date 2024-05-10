import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const  useGlobalContext = ()=>{
    return useContext(AppContext);
}
const AppProvider = ({children}) =>{
    const [isSidebarOpen,setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen,setIsSubmenuOpen] = useState(false);
    const [location,setLocation] = useState({});
    const [page,setPage] = useState({page:'',links:[]});

    const openSidebar = ()=>{
        setIsSidebarOpen(true)
    }
    const closeSidebar = ()=>{
        setIsSidebarOpen(false)
    }
    const openSubmenu = (text,coordinate)=>{
        const  page = sublinks.find((link) => link.page === text)
        setPage(page)
        setLocation(coordinate)
        setIsSubmenuOpen(true)
    }
    const closeSubmenu = ()=>{
        setIsSubmenuOpen(false)
    }
    return <AppContext.Provider value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        openSidebar,
        closeSidebar,
        location,
        page
    }}>
        {children}
    </AppContext.Provider>
}

export {AppContext , AppProvider} 