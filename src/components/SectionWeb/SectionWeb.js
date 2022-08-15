import {Carousel} from '../Carousel/src'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'
import './web.css'
import prodlogistica from './video/webm/prodlogistica.mp4'
import fruitprod from './video/webm/fruitprod.mp4'
import cleaning from './video/webm/cleaning.mp4'
import steamsales from './video/webm/steamsales.mp4'


// import steamsales from './images/steamsales.gif'


const WebCarousel = () => {

  const CarouselData = [
    {
      githubLink: 'https://github.com/Korolev-Oleg/Korolev-Oleg.github.io/tree/master/steamsales',
      previewLink: '/steamsales',
      image: steamsales,
    },
    {
      githubLink: 'https://github.com/Korolev-Oleg/Korolev-Oleg.github.io/tree/master/prodlogistica',
      previewLink: 'https://prodlogistica.ru/',
      image: prodlogistica,
    },
    {
      githubLink: 'https://github.com/Korolev-Oleg/Korolev-Oleg.github.io/tree/master/cleaning',
      previewLink: '/cleaning',
      image: cleaning,
    },
    {
      githubLink: 'https://github.com/Korolev-Oleg/Korolev-Oleg.github.io/tree/master/fruit',
      previewLink: '/fruit',
      image: fruitprod,
    },
  ]
  return (
    <div className="section-web">
      <h2>Web development</h2>
      <div className='web-carousel'>
        <Carousel
          data={CarouselData}
          autoPlay={true}
          rightItem={<FaArrowRight/>}
          leftItem={<FaArrowLeft/>}
          animationDuration={3000}
          headerTextType="black"
          subTextType="white"
          size="normal"
        />
      </div>
    </div>
  )
}

export default WebCarousel
