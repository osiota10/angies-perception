

function Contact() {
    return (
        <section className="container py-8 section" id="contact-us">
            <header className="text-center mb-4">
                <h2 className="text-primary fw-bolder">Get in Touch</h2>
            </header>

            <div className="row align-items-center justify-content-center g-3">
                <div className="col-lg text-center"><i
                    className="fa-solid fa-envelope me-2 fs-3 text-dark bg-light p-3 rounded-circle"></i>
                    <section>
                        <a href="mailto:{{ company_data.0.email }} " className="text-decoration-none text-white"><span
                            className="custom-icon"></span>
                            <p className="h6">example@gmail.com</p>
                        </a>
                    </section>
                </div>

                <section className="col-lg text-center"><i
                    className="fa-solid fa-phone-volume me-2 fs-3 text-dark bg-light p-3 rounded-circle"></i>
                    <section>
                        <a href="tel:{{ company_data.0.telephone }}" className="text-decoration-none text-white"><p class="h6">
                            0812345678</p></a>
                    </section>
                </section>

                <section className="col-lg text-center">
                    <i className="fa-solid fa-magnifying-glass-location me-2 fs-3 text-dark bg-light p-3 rounded-circle"></i>
                    <section>
                        <p className="h6">Stephen Keshi Stadium</p>
                    </section>
                </section>
            </div>

            <section className="mt-6">
                <header className="text-center mb-2">
                    <h5 className="text-primary fw-bolder">Follow Us on Social Media</h5>
                </header>

                <section className="hstack g-1 justify-content-center">
                    <section className='me-1 bg-white p-1 rounded icon-size text-center'>
                        <a href='#' target="_blank"><i className="fa-brands fa-square-facebook fs-5 text-dark" ></i></a>
                    </section>

                    <section className='me-1 bg-white p-1 rounded icon-size text-center'>
                        <a href='#' target="_blank"><i className="fa-brands fa-instagram fs-5 text-dark" ></i></a>
                    </section>

                    <section className='me-1 bg-white p-1 rounded icon-size text-center'>
                        <a href='#' target="_blank"><i className="fa-brands fa-square-twitter fs-5 text-dark" ></i></a>
                    </section>
                </section>
            </section>
        </section>
    );
}

export default Contact;