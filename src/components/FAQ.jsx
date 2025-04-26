import React from 'react'
import SecondSection from '../common/SecondSection'
import '../styles/FAQStyle.css'
const FAQ = () => {
  return (
    <SecondSection 
    title={'أسئلة شائعة'}
    subTitle={'إليك بعض الأسئلة الأكثر شيوعًا التي قد تكون لديك حول خدماتنا.'}
    
    >
   <div className="bg-light shadow p-5 " style={{borderRadius: '3%'}}>
  <div className="accordion accordion-flush" id="accordionFlushExample">
    <div className="accordion-item my-3" style={{border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden'}}>
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
    
    <div className="accordion-item my-3" style={{border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden'}}>
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
    
    <div className="accordion-item my-3" style={{border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden'}}>
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
  </div>
</div>
    </SecondSection>
  )
}

export default FAQ