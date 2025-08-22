import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps{
    children:ReactNode
    activeLink?:string
}

export default function Layout({children,activeLink="home"}:LayoutProps){
    return(
        <>
        <Navbar activeLink={activeLink}/>
        {children}
        <Footer/>
        </>
    )
}