

function Services() {
    return (
        <section class="py-8 services">
            <section class="container">
                <header class="text-center ">
                    <h2 class="h2 text-primary fw-bolder">Our Services</h2>
                    <h6 class="h6 text-primary fw-light">What we are known for</h6>
                </header>
                <section class="mt-5">
                    <div class="row row-cols-1 row-cols-lg-3 g-6 ">

                        <div class="col mx-auto">
                            <div class="card service-card mx-auto">
                                <div class="card-body">
                                    <section class="text-center mb-2">
                                        <i class="{{ service.font_awesome_class }}"></i>
                                    </section>

                                    <h5 class="card-title text-center text-primary fw-bolder">Service One</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis labore illum repudiandae assumenda optio minima dolorum quos exercitationem omnis nulla pariatur, quas ratione error possimus. Officiis accusantium harum cumque quod!</p>
                                </div>
                            </div>
                        </div>


                        <div class="col mx-auto">
                            <div class="card service-card mx-auto">
                                <div class="card-body">
                                    <section class="text-center mb-2">
                                        <i class="{{ service.font_awesome_class }}"></i>
                                    </section>

                                    <h5 class="card-title text-center text-primary fw-bolder">Service One</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis labore illum repudiandae assumenda optio minima dolorum quos exercitationem omnis nulla pariatur, quas ratione error possimus. Officiis accusantium harum cumque quod!</p>
                                </div>
                            </div>
                        </div>

                        <div class="col mx-auto">
                            <div class="card service-card mx-auto">
                                <div class="card-body">
                                    <section class="text-center mb-2">
                                        <i class="{{ service.font_awesome_class }}"></i>
                                    </section>

                                    <h5 class="card-title text-center text-primary fw-bolder">Service One</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis labore illum repudiandae assumenda optio minima dolorum quos exercitationem omnis nulla pariatur, quas ratione error possimus. Officiis accusantium harum cumque quod!</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </section>
        </section>
    );
}

export default Services;