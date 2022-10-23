import { useSelector } from "react-redux";

const Navbar = () => {

    console.log(useSelector((store) => {
        console.log("Navbar",store); 
    }))
    return(
        <p> Navbar </p>
    )
}

export default Navbar;