import Cart from "./Cart";

const Nav = () =>{
    return(
        <div className="nav">
            <h1>LOGO</h1>
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>Contact</li>
            </ul>
            <Cart />
        </div>
    )
}

export default Nav;