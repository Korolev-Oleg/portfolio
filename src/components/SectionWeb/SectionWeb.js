import {Carousel} from '../Carousel/src'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'
import './web.css'
import prodlogistica from './video/prodlogistica.mp4'
import fruitprod from './video/fruitprod.mp4'
import cleaning from './video/cleaning.mp4'
import steamsales from './video/steamsales.mp4'


const SectionWeb = () => {

  const CarouselData = [
    {
      githubLink: 'https://github.com/Korolev-Oleg/Korolev-Oleg.github.io/tree/master/steamsales',
      previewLink: '/steamsales',
      video: steamsales,
    },
    {
      githubLink: 'https://github.com/Korolev-Oleg/Korolev-Oleg.github.io/tree/master/prodlogistica',
      previewLink: 'https://prodlogistica.ru/',
      video: prodlogistica,
    },
    {
      githubLink: 'https://github.com/Korolev-Oleg/Korolev-Oleg.github.io/tree/master/cleaning',
      previewLink: '/cleaning',
      video: cleaning,
    },
    {
      githubLink: 'https://github.com/Korolev-Oleg/Korolev-Oleg.github.io/tree/master/fruit',
      previewLink: '/fruit',
      video: fruitprod,
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
