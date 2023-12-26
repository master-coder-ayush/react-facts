import logo from "../assets/react-icon-small.png"

export default function Navbar(){
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="React Logo" width="30px" />
                <p>ReactFacts</p>
            </div>
            <h3>React Course - Project 1</h3>
        </nav>
    )
}