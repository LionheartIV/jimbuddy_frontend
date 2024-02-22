import { Link } from "react-router-dom";

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="no wrap"> Jim Buddy
                </span></h1>
            </header>
            <main className="public__main">
                <p> Lorem ipsum</p>
                <address className="public__addr">
                    Jim Buddy <br />
                    69 cool street <br />
                    Baladeby, 2750 <br />
                    <a href="+4569696969">(+45) 6969 6969</a>
                </address>
                <br />
                <p>Creator: Philip Dion Leo</p>
            </main>
            <footer>
                <Link to="/login"> Login</Link>
            </footer>
        </section>
    )
    return content
}
export default Public