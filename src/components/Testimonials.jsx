import Section from '../common/Section'
import '../styles/TestimonialsStyle.css'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {

  const testimonials = [
    { id: 1, name: 'أحمد علي', feedback: 'خدمة رائعة وتجربة لا تُنسى!', img: 'src/assets/display-pic.png' },
    { id: 2, name: 'نبيل محمد', feedback: 'أفضل مطعم زرته على الإطلاق.', img: 'src/assets/display-pic.png' },
    { id: 3, name: 'قصي خالد', feedback: 'أجواء مميزة وطعام شهي جداً.', img: 'src/assets/display-pic.png' },
    { id: 4, name: 'محمود عبد الله', feedback: 'طاقم العمل ودود وخدمة ممتازة.', img: 'src/assets/display-pic.png' },
    { id: 5, name: 'نور يوسف', feedback: 'تجربة تستحق التكرار!',img: 'src/assets/display-pic.png' },
    { id: 6, name: 'لؤي سمير', feedback: 'مذاق لا يُضاهى، أنصح الجميع بالتجربة.', img: 'src/assets/display-pic.png' },
  ];

  return (
    <Section
      title={'آراء عملائنا'}
      subTitle={'نفخر بتقديم أفضل خدمة وتجربة طعام استثنائية لعملائنا الأعزاء.'}
      customBackgroundColor='#ff8c8c'
    >
      <div className="testimonials-container">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial-card">
                <div className="testimonial-image-container">
                  <img 
                    src={testimonial.img} 
                    alt={testimonial.name} 
                    className="testimonial-image"
                  />
                </div>
                <h4 className="testimonial-name">{testimonial.name}</h4>
                <p className="testimonial-feedback">{testimonial.feedback}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  )
}

export default Testimonials;
