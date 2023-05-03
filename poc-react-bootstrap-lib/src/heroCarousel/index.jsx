import Carousel from 'react-bootstrap/Carousel';
import './styles.css'

function HeroCarousel() {
  return (
    <Carousel>
      <Carousel.Item
        className='item'   
      >
        <img
          className="d-block w-100"
          src="https://1.bp.blogspot.com/-qvRHBhLoZR0/YEvHa7mflbI/AAAAAAADmLM/-wK78vR59YEu1uUCOg31JE5Do55yOZpcACLcBGAsYHQ/s2048/floresta-amazonica-318520802.jpeg"
          alt="First slide"
        />
        <Carousel.Caption
          className='caption'
        >
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.visiteosusa.com.br/sites/default/files/styles/hero_xl_1600x700/public/images/hero_media_image/2019-01/77e98e59c265b753237bc27673a6684e.jpeg?h=20577b14&itok=o5rT-t6D"
          alt="Second slide"
        />

        <Carousel.Caption
          className='caption'
        > 
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.olhardigital.com.br/wp-content/uploads/2022/12/pexels-jahoo-clouseau-1260324-1-1536x864.jpg"
          alt="Third slide"
        />

        <Carousel.Caption
          className='caption'
        >
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroCarousel;