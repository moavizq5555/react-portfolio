import React from 'react'
import './testimonials.css'
import Avat2 from '../../assets/avat2.jpg'
import Avat1 from '../../assets/avat1.jpg'
import { Pagination, Navigation } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
const data = [
  {
    avatar: Avat1,
    name: 'Ahraham Saleem',
    review:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae commodi quia, id harum sequi fugit? Perspiciatis, alias sequi vero mollitia consequuntur quos, ab, doloremque sapiente odit molestiae iure rem voluptates?',
  },
  {
    avatar: Avat2,
    name: 'Nelaam Saleem',
    review:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae commodi quia, id harum sequi fugit? Perspiciatis, alias sequi vero mollitia consequuntur quos, ab, doloremque sapiente odit molestiae iure rem voluptates?',
  },
  {
    avatar: Avat1,
    name: 'Naveed Queshi',
    review:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae commodi quia, id harum sequi fugit? Perspiciatis, alias sequi vero mollitia consequuntur quos, ab, doloremque sapiente odit molestiae iure rem voluptates?',
  },
  {
    avatar: Avat1,
    name: 'Tanveer Ahmad',
    review:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae commodi quia, id harum sequi fugit? Perspiciatis, alias sequi vero mollitia consequuntur quos, ab, doloremque sapiente odit molestiae iure rem voluptates?',
  },
]
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonils</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map((value, index) => {
          return (
            <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={value.avatar} alt="client" />
              </div>
              <h5 className="client__name">{value.name}</h5>
              <small className="client__reivew">{value.review}</small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials
