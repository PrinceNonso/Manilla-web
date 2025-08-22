import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps{
    children:ReactNode
}

export default function Layout(props:LayoutProps){
    return(
        <>
        <Navbar/>
        {props.children}
        <Footer/>
        </>
    )
}