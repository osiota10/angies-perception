import Slider from "react-slick";


function Testimonials() {
    const settings = {
        dots: true,
        arrows: false,
        centerMode: true,
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 2,
        initialSlide: 0,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 771,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
        ]
    };

    return (

        <section className="py-8">
            <header class="text-center ">
                <h2 class="h2 text-primary fw-bolder">Testimonials</h2>
                <h6 class="h6 text-primary fw-light">What we are known for</h6>
            </header>

            <Slider {...settings}>

                <div class="card test-card mx-auto">
                    <div class="card-body">
                        <div class="row g-3 align-items-center">
                            <div class="col-lg-5">
                                <section class="text-center mb-1">
                                    <img src="{{ test.get_photo_url }}" class="img-fluid rounded-circle "
                                        alt="{{test.name}}" />
                                </section>
                                <section class="text-center">
                                    <h4 class="card-title">Sam Osiota</h4>
                                    <small class="card-title">CEO Codehub Technologies</small>
                                </section>
                            </div>
                            <div class="col-lg-7">
                                <div>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quis. Ut repellat adipisci suscipit omnis sit magnam necessitatibus aut ex. Quam eos nostrum tenetur sunt, quas omnis voluptatum magnam minus.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card test-card mx-auto">
                    <div class="card-body">
                        <div class="row g-3 align-items-center">
                            <div class="col-lg-5">
                                <section class="text-center mb-1">
                                    <img src="{{ test.get_photo_url }}" class="img-fluid rounded-circle "
                                        alt="{{test.name}}" />
                                </section>
                                <section class="text-center">
                                    <h4 class="card-title">Sam Osiota</h4>
                                    <small class="card-title">CEO Codehub Technologies</small>
                                </section>
                            </div>
                            <div class="col-lg-7">
                                <div>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quis. Ut repellat adipisci suscipit omnis sit magnam necessitatibus aut ex. Quam eos nostrum tenetur sunt, quas omnis voluptatum magnam minus.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div class="card test-card mx-auto">
                    <div class="card-body">
                        <div class="row g-3 align-items-center">
                            <div class="col-lg-5">
                                <section class="text-center mb-1">
                                    <img src="{{ test.get_photo_url }}" class="img-fluid rounded-circle "
                                        alt="{{test.name}}" />
                                </section>
                                <section class="text-center">
                                    <h4 class="card-title">Sam Osiota</h4>
                                    <small class="card-title">CEO Codehub Technologies</small>
                                </section>
                            </div>
                            <div class="col-lg-7">
                                <div>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quis. Ut repellat adipisci suscipit omnis sit magnam necessitatibus aut ex. Quam eos nostrum tenetur sunt, quas omnis voluptatum magnam minus.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="card test-card mx-auto">
                    <div class="card-body">
                        <div class="row g-3 align-items-center">
                            <div class="col-lg-5">
                                <section class="text-center mb-1">
                                    <img src="{{ test.get_photo_url }}" class="img-fluid rounded-circle "
                                        alt="{{test.name}}" />
                                </section>
                                <section class="text-center">
                                    <h4 class="card-title">Sam Osiota</h4>
                                    <small class="card-title">CEO Codehub Technologies</small>
                                </section>
                            </div>
                            <div class="col-lg-7">
                                <div>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quis. Ut repellat adipisci suscipit omnis sit magnam necessitatibus aut ex. Quam eos nostrum tenetur sunt, quas omnis voluptatum magnam minus.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Slider>
        </section>
    );
}

export default Testimonials;