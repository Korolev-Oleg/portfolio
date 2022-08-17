import {Carousel} from '../Carousel/src'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'
import './web.css'
import prodlogistica from './video/webm/prodlogistica.webm'
import fruitprod from './video/webm/fruitprod.webm'
import cleaning from './video/webm/cleaning.webm'
import steamsales from './video/webm/steamsales.webm'


const SectionWeb = () => {

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
    <div className={'wrapper'}>
      <section className="web">
        <h2 className={'title'}>Web development</h2>
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
      </section>
    </div>
  )
}

export default SectionWeb
