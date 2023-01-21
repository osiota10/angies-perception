import Slider from "react-slick";

const pic = {
    url: 'https://joy1.videvo.net/videvo_files/video/free/2015-05/large_watermarked/FoodPack1_13_Videvo_preview.mp4'
}

function Hero() {
    const settings = {
        dots: false,
        arrows: false,
        className: "center",
        infinite: true,
        centerPadding: "160px",
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        // afterChange: function (index) {
        //     console.log(
        //         `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        //     );
        // },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
        ]
    };

    return (
        <section className="card hero">
            <div className="text-bg-dark">
                <section className="ratio ratio-21x9">
                    <video src={pic.url} muted loop autoPlay></video>
                </section>

                <div className="card-img-overlay img-dark-overlay">
                    <div className="py-5 text-center position-absolute top-50 start-50 translate-middle w-75">
                        <h4 className="text-primary">Call us Today for</h4>
                        <Slider {...settings}>
                            <h1 className="text-white">Catering Jobs</h1>
                            <h1 className="text-white">Haulage</h1>
                            <h1 className="text-white">Event Planning</h1>
                        </Slider>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;