import { Link } from "react-router-dom"

const DashHeader = () => {

    const content = (
        <header className="dash-header">
            <div className="dashheader__container">
                <Link to="/dash">
                    <h1 className="dash-header__title">Jim Buddy</h1>                    
                </Link>
                <nav className="dash-header__nav">
                    {/*nav buttons*/}
                </nav>
            </div>
        </header>
    )
    return content
}
export default DashHeader