import React from "react";

const Header = (props) => {
    console.log("Header",props.data);
    return (
        <>
            <p> Total Item Count : {props.data.length}</p>
        </>
    )
}

export default Header;