

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark text-dark bg-dark shadow fixed-top w-100" id="navbar-example">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <a className="navbar-brand text-primary" href="#">
                    <img src="{{ company_data.0.logo.url }}" alt="" width="30" height="24"
                        className="d-inline-block align-text-top" />
                    Angies
                </a>

                <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo03">
                    <ul className="navbar-nav  mt-3 mb-lg-0 nav-pills">
                        <li className="nav-item">
                            <a className="nav-link active ps-1" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ps-1" href="#">About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ps-1" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ps-1" href="#">Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ps-1" href="#">Testimonials</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ps-1" href="#">Contact us</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default NavBar;