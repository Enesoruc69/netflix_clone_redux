import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
        <header className="mb-10">
            <Link to={"/"}>
            <img src="images/netflix_logo.svg" alt="" className="max-w-[150px]" />
            </Link>
            
        </header>
    </div>
  )
}

export default Header