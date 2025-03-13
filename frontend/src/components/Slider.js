import { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const slides = [
  {
    id: 1,
    title: 'Samia Outfit Élégance Contemporaine',
    description:
      'Le Samia Outfit incarne la mode moderne avec des pièces qui allient élégance et confort...',
    image: '/assets/slider1.png',
  },
  {
    id: 2,
    title: 'Samia Outfit - Fusion de Style et Confort',
    description:
      'Le Samia Outfit réinvente la mode avec un mélange de sophistication et de praticité...',
    image: '/assets/slider2.png',
  },
  {
    id: 3,
    title: "Samia Outfit - L'Allure Moderne",
    description:
      'Affichez une allure résolument moderne avec le Samia Outfit...',
    image: '/assets/slider3.png',
  },
]

const Slider = () => {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [fade, setFade] = useState(false)

  const nextSlide = () => {
    setFade(false)
    setTimeout(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
      setFade(true)
    }, 100)
  }

  const prevSlide = () => {
    setFade(false)
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
      setFade(true)
    }, 100)
  }

  useEffect(() => {
    setFade(true)
    if (!isHovered) {
      const interval = setInterval(nextSlide, 5000)
      return () => clearInterval(interval)
    }
  }, [isHovered, current])

  return (
    <div
      className='slider'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className='slides'
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className='slide'>
            <div
              className={`content section-center ${
                index === current ? 'active' : ''
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className='small-image'
              />
              <div
                className={`content-title ${
                  index === current ? 'fade-in' : ''
                }`}
              >
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <button className='buy-now-btn'>Acheter Maintenant</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className='prev' onClick={prevSlide}>
        <FaChevronLeft size={24} />
      </button>

      <button className='next' onClick={nextSlide}>
        <FaChevronRight size={24} />
      </button>

      <div className='dots'>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  )
}

export default Slider
