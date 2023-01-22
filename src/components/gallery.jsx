import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

const pic = {
    url: 'https://www.helpguide.org/wp-content/uploads/calories-counting-diet-food-control-and-weight-loss-concept-calorie.jpg',
    pic1: "https://media.istockphoto.com/id/650655146/photo/catering-food-wedding-event-table.jpg?s=612x612&w=0&k=20&c=ATGYgW8bM_559jJ5aUNO4HlJqpkOWUmNNMMflx5kajo=",
    pic2: "https://cafehenrie.com/wp-content/uploads/2019/04/Event-Catering-Services0.jpg"
}

function Gallery() {
    const [open, setOpen] = useState(false);
    return (
        <section class="mt-8">
            <section class="container position-relative animate__animated animate__zoomIn">
                <a role="button" onClick={() => setOpen(true)}>
                    <div class="card bg-dark text-white ">
                        <section class="ratio ratio-16x9 ">
                            <img src={pic.url} class="img-fluid" alt="..." />
                        </section>
                        <section
                            class="card-img-overlay img-dark-overlay d-flex flex-column align-items-center justify-content-center">
                            <h3 class="mb-4">Our Collection Gallery</h3>
                            <button type="button" class="card-title btn btn-dark animate__animated animate__tada animate__infinite animate__slow" >Discover true Inspiration</button>
                        </section>
                    </div>
                </a>

                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={[
                        { src: pic.url },
                        { src: pic.pic1 },
                        { src: pic.pic2 },
                    ]}
                />

                {/* <section class="ratio ratio-16x9 position-absolute top-50 start-0 translate-middle opacity">
                    <img src={pic.url} class="img-fluid" alt="..." />
                </section> */}
            </section>
        </section>
    );
}

export default Gallery;