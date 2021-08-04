import Carousel from 'react-bootstrap/Carousel'
import slider1 from './../assets/slider1.jpg'
import slider2 from './../assets/slider2.jpg'
import slider3 from './../assets/slider3.jpg'

export default function About() {
    return(
        <>
        <Carousel fade>
        <Carousel.Item className="carousel-item-dbcustom">
            <img
            className="d-block w-100"
            src={slider1}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item-dbcustom">
            <img
            className="d-block w-100"
            src={slider2}
            alt="Second slide"
            />
            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item-dbcustom">
            <img
            className="d-block w-100"
            src={slider3}
            alt="Third slide"
            />
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </>
)
}