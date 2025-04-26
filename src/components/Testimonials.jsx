import SecondSection from '../common/SecondSection'

const Testimonials = () => {
  
  const testimonials = [
    {
      id: 1,
      name: "سارة أحمد",
      role: "زبونة دائمة",
      image: "/images/testimonial-1.jpg",
      text: "تجربة رائعة وطعام لذيذ للغاية! المكان مريح والخدمة ممتازة. أصبح هذا المطعم وجهتي المفضلة لقضاء أمسيات مميزة مع العائلة."
    },
    {
      id: 2,
      name: "محمد علي",
      role: "ناقد طعام",
      image: "/images/testimonial-2.jpg",
      text: "مأكولات أصيلة بنكهات فريدة تعبر عن هوية المكان. الأطباق مُعدة بعناية فائقة واهتمام بأدق التفاصيل. تجربة طعام لا تُنسى!"
    },
    {
      id: 3,
      name: "فاطمة الزهراء",
      role: "مدونة طعام",
      image: "/images/testimonial-3.jpg",
      text: "أجواء المطعم ساحرة والطعام شهي. كل زيارة لي هنا تكون مختلفة ومميزة. أنصح بتجربة طبق الشيف الخاص، إنه مذهل حقًا!"
    },
    {
      id: 4,
      name: "خالد العمري",
      role: "رجل أعمال",
      image: "/images/testimonial-4.jpg",
      text: "أفضل مكان لعقد اجتماعات العمل في أجواء هادئة ومريحة. الخدمة سريعة والطعام متنوع ولذيذ. سأعود بالتأكيد مرارًا!"
    },
    {
      id: 5,
      name: "ليلى الحسن",
      role: "طالبة جامعية",
      image: "/images/testimonial-5.jpg",
      text: "أسعار مناسبة وأجواء رائعة للدراسة والاسترخاء. قهوتهم من أفضل ما جربت والوجبات الخفيفة لذيذة جداً. مكان مثالي للطلاب!"
    },
    {
      id: 6,
      name: "عمر الراشد",
      role: "مصور محترف",
      image: "/images/testimonial-6.jpg",
      text: "التصميم الداخلي للمطعم فريد من نوعه ويوفر خلفيات مثالية للتصوير. ناهيك عن أن تقديم الأطباق احترافي ويسر الناظرين!"
    }
  ];

  return (
    <SecondSection
      title={'ما يقوله زبائننا'}
      subTitle={'نحن فخورون بتقديم خدمة مميزة وتجربة طعام استثنائية.'}
    >
      <div className="testimonials-container">
        <div className="testimonials-slider">
          <div 
            className="testimonials-track" 
          >
            {testimonials.map((_, slideIndex) => (
              <div key={slideIndex} className="testimonials-slide">
                <div className="testimonials-row">
                  {testimonials
                    .map((testimonial) => (
                      <div key={testimonial.id} className="testimonial-card">
                        <div className="testimonial-quote">"</div>
                        <p className="testimonial-text">{testimonial.text}</p>
                        <div className="testimonial-rating">
                          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                        </div>
                        <div className="testimonial-image-container">
                          <div 
                            className="testimonial-image" 
                            style={{ backgroundImage: `url('/api/placeholder/80/80')` }}
                            alt={testimonial.name}
                          ></div>
                        </div>
                        <h4 className="testimonial-name">{testimonial.name}</h4>
                        <p className="testimonial-role">{testimonial.role}</p>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="testimonials-navigation">
          <button className="nav-arrow prev-arrow" >
            <span>&#10094;</span>
          </button>
          
          <div className="testimonials-dots">
          <button 
                className={`testimonial-dot`}
                />
              <button 
                className={`testimonial-dot active`}
                />
                
          </div>
          
          <button className="nav-arrow next-arrow">
            <span>&#10095;</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .testimonials-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 0;
          direction: rtl;
        }
        
        .testimonials-slider {
          position: relative;
          overflow: hidden;
          margin-bottom: 30px;
        }
        
        .testimonials-track {
          display: flex;
          transition: transform 0.6s ease;
         
        }
        
        .testimonials-slide {
          min-width: 100%;
          flex: 0 0 auto;
        }
        
        .testimonials-row {
          display: flex;
          justify-content: space-around;
          gap: 20px;
          margin: 0 10px;
        }
        
        .testimonial-card {
          flex: 1;
          background-color: #fff;
          border-radius: 12px;
          padding: 30px 25px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
          text-align: center;
          position: relative;
          max-width: 350px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }
        
        .testimonial-quote {
          font-size: 60px;
          color: #D60F14;
          opacity: 0.2;
          font-family: Georgia, serif;
          position: absolute;
          top: 15px;
          right: 20px;
          line-height: 1;
        }
        
        .testimonial-text {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #444;
          margin-bottom: 20px;
          min-height: 100px;
          position: relative;
          z-index: 1;
        }
        
        .testimonial-rating {
          color: #FFCC00;
          font-size: 1.1rem;
          margin-bottom: 15px;
        }
        
        .testimonial-image-container {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin: 0 auto 15px;
          overflow: hidden;
          border: 3px solid #D60F14;
        }
        
        .testimonial-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          background-size: cover;
          background-position: center;
        }
        
        .testimonial-name {
          font-size: 1.1rem;
          color: #222;
          margin-bottom: 5px;
        }
        
        .testimonial-role {
          font-size: 0.85rem;
          color: #777;
        }
        
        .testimonials-navigation {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 20px;
        }
        
        .nav-arrow {
          background-color: transparent;
          border: 2px solid #D60F14;
          color: #D60F14;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 0 10px;
        }
        
        .nav-arrow:hover {
          background-color: #D60F14;
          color: #fff;
        }
        
        .testimonials-dots {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .testimonial-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #ddd;
          margin: 0 5px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .testimonial-dot.active {
          background-color: #D60F14;
          transform: scale(1.2);
        }
        
        /* Responsive styles */
        @media screen and (max-width: 992px) {
          .testimonials-row {
            flex-wrap: wrap;
          }
          
          .testimonial-card {
            flex: 0 0 calc(50% - 20px);
            margin-bottom: 20px;
          }
        }
        
        @media screen and (max-width: 768px) {
          .testimonial-card {
            flex: 0 0 100%;
          }
        }
      `}</style>
    </SecondSection>
  )
}

export default Testimonials