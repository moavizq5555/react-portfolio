import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/port2.png'
import IMG2 from '../../assets/port3.jpg'
import IMG3 from '../../assets/port4.jpg'
import IMG4 from '../../assets/port5.png'
import IMG5 from '../../assets/port6.jpg'
import IMG6 from '../../assets/port7.jpg'
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'My Portfolio title',
    github: 'http://github.com',
    demo: 'http://github.com',
  },
  {
    id: 2,
    image: IMG2,
    title: 'My Portfolio title',
    github: 'http://github.com',
    demo: 'http://github.com',
  },
  {
    id: 3,
    image: IMG3,
    title: 'My Portfolio title',
    github: 'http://github.com',
    demo: 'http://github.com',
  },
  {
    id: 4,
    image: IMG4,
    title: 'My Portfolio title',
    github: 'http://github.com',
    demo: 'http://github.com',
  },
  {
    id: 5,
    image: IMG5,
    title: 'My Portfolio title',
    github: 'http://github.com',
    demo: 'http://github.com',
  },
  {
    id: 6,
    image: IMG6,
    title: 'My Portfolio title',
    github: 'http://github.com',
    demo: 'http://github.com',
  },
]
const Porfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Porfolio</h2>
      <div className="container portfolio__container">
        {data.map((value, index) => {
          return (
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img
                  src={value.image}
                  className="portfolio__item-image-img"
                  alt="Porfolio"
                />
              </div>
              <h3>{value.title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={value.github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={value.demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live demo
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Porfolio
