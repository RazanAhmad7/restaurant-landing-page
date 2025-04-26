import React from 'react'
import Section from '../common/Section'

const FAQ = () => {
  return (
    <Section 
      title={'أسئلة شائعة'}
      subTitle={'إليك بعض الأسئلة الأكثر شيوعًا التي قد تكون لديك حول خدماتنا.'}
      customBackgroundColor='#ff8c8c'
    >
      <div className="bg-light shadow p-lg-5 p-3 w-100 " style={{ borderRadius: '3%' }}>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          {/* السؤال الأول */}
          <div className="accordion-item my-3" style={{ border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden' }}>
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                هل يمكنني تعديل الحجز؟
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                نعم، يمكنك تعديل الحجز قبل 24 ساعة من الموعد المحدد دون أي رسوم إضافية.
              </div>
            </div>
          </div>

          {/* السؤال الثاني */}
          <div className="accordion-item my-3" style={{ border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden' }}>
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                هل تقدمون وجبات نباتية؟
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                نعم، لدينا مجموعة متنوعة من الوجبات النباتية والخيارات الصحية المتاحة في قائمتنا.
              </div>
            </div>
          </div>

          {/* السؤال الثالث */}
          <div className="accordion-item my-3" style={{ border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden' }}>
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                هل يمكنني طلب توصيل للمنزل؟
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                نعم، نقدم خدمة التوصيل إلى المنزل لجميع المناطق المجاورة. يمكنك تقديم طلبك عبر موقعنا أو تطبيق الهاتف المحمول.
              </div>
            </div>
          </div>

          {/* السؤال الرابع */}
          <div className="accordion-item my-3" style={{ border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden' }}>
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                ما هي طرق الدفع المتاحة؟
              </button>
            </h2>
            <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                نقبل الدفع النقدي، وبطاقات الائتمان، وخيارات الدفع الإلكتروني عبر التطبيق.
              </div>
            </div>
          </div>

          {/* السؤال الخامس */}
          <div className="accordion-item my-3" style={{ border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden' }}>
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                هل يوجد عروض أو خصومات دائمة؟
              </button>
            </h2>
            <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                نعم، نقدم عروضاً موسمية وخصومات خاصة لعملائنا الدائمين، تابعنا على وسائل التواصل الاجتماعي للبقاء على اطلاع.
              </div>
            </div>
          </div>

        </div>
      </div>
    </Section>
  )
}

export default FAQ
