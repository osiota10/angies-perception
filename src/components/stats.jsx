import CountUp from 'react-countup';

function Stat() {
    return (
        <section class="container stat py-8 section" id="stat">
            <div class="row row-cols row-cols-lg-4 g-6">
                <div class="col mx-auto">
                    <div class="card stat-card mx-auto">
                        <div class="card-body">
                            <section class="text-center mb-2">
                                <i class="{{ item.font_awesome_class }}"></i>
                            </section>
                            <h3 className="card-title text-center text-primary fw-bolder"><CountUp end={666} duration={10} suffix=" +" /></h3>
                            <p class="card-text text-center fw-light">Ongoing Projects</p>
                        </div>
                    </div>
                </div>

                <div class="col mx-auto">
                    <div class="card stat-card mx-auto">
                        <div class="card-body">
                            <section class="text-center mb-2">
                                <i class="{{ item.font_awesome_class }}"></i>
                            </section>
                            <h3 className="card-title text-center text-primary fw-bolder"><CountUp end={666} duration={10} suffix=" +" /></h3>
                            <p class="card-text text-center fw-light">Jobs Delivered</p>
                        </div>
                    </div>
                </div>

                <div class="col mx-auto">
                    <div class="card stat-card mx-auto">
                        <div class="card-body">
                            <section class="text-center mb-2">
                                <i class="{{ item.font_awesome_class }}"></i>
                            </section>
                            <h3 className="card-title text-center text-primary fw-bolder"><CountUp end={666} duration={10} suffix=" +" /></h3>
                            <p class="card-text text-center fw-light">Happy Customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Stat;