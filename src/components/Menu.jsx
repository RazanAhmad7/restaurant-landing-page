import React from 'react'
import OneSection from '../common/OneSection'
import SecondSection from '../common/SecondSection'

const Menu = () => {
  return (
    <SecondSection 
      title={'استمتع بتجربة طعام لا مثيل لها'}
      subTitle={'نقدم لك قائمة متنوعة تضم أفضل الأطباق المحلية والعالمية، لتحظى بتجربة طعام لا تُنسى.'}
    >
      <div className='row'>
        {/* القائمة الأيمن */}
        <div className='col-md-6 mb-4'>
          {/* مقبلات */}
          <div className="card shadow-sm mb-4 position-relative">
            <div className="discount-badge">15%</div>
            <div className="card-body d-flex p-0">
              <img 
                src="src/assets/e2ebb73688f891e5ef695135a774dfbf-size1200.jpg" 
                alt="مقبلات" 
                className="rounded-start"
                style={{ width: '35%', height: '180px', objectFit: 'cover' }}
              />
              <div className="p-3 rtl" style={{ width: '65%' }}>
                <h4 className="fw-bold mb-2" style={{ color: '#D60F14' }}>مقبلات</h4>
                <p className="text-muted mb-3">تشكيلة من المقبلات الباردة والساخنة لبدء وجبتك بأشهى النكهات.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="order-btn">عرض جميع الأصناف</button>
                  <span className="fw-bold">ابتداءً من ٣٥ د.أ</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* أطباق رئيسية */}
          <div className="card shadow-sm mb-4 position-relative">
            <div className="card-body d-flex p-0">
              <img 
                src="src/assets/victoria-shes-UC0HZdUitWY-unsplash.jpg" 
                alt="أطباق رئيسية" 
                className="rounded-start"
                style={{ width: '35%', height: '180px', objectFit: 'cover' }}
              />
              <div className="p-3 rtl" style={{ width: '65%' }}>
                <h4 className="fw-bold mb-2" style={{ color: '#D60F14' }}>أطباق رئيسية</h4>
                <p className="text-muted mb-3">أشهى الأطباق المحلية والعالمية، محضّرة بأعلى جودة ومذاق فريد.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="order-btn">عرض جميع الأصناف</button>
                  <span className="fw-bold">ابتداءً من ٧٥ د.أ</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* حلويات */}
          <div className="card shadow-sm mb-4 position-relative">
            <div className="discount-badge">20%</div>
            <div className="card-body d-flex p-0">
              <img 
                src="src/assets/dessert-1786311_640.jpg" 
                alt="حلويات" 
                className="rounded-start"
                style={{ width: '35%', height: '180px', objectFit: 'cover' }}
              />
              <div className="p-3 rtl" style={{ width: '65%' }}>
                <h4 className="fw-bold mb-2" style={{ color: '#D60F14' }}>حلويات</h4>
                <p className="text-muted mb-3">مجموعة مختارة من الحلويات الشرقية والغربية لإرضاء جميع الأذواق.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="order-btn">عرض جميع الأصناف</button>
                  <span className="fw-bold">ابتداءً من ٤٠ د.أ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* القائمة الأيسر */}
        <div className='col-md-6 mb-4'>
          {/* مشروبات باردة */}
          <div className="card shadow-sm mb-4 position-relative">
            <div className="card-body d-flex p-0">
              <img 
                src="src/assets/drink-7279404_640.jpg" 
                alt="مشروبات باردة" 
                className="rounded-start"
                style={{ width: '35%', height: '180px', objectFit: 'cover' }}
              />
              <div className="p-3 rtl" style={{ width: '65%' }}>
                <h4 className="fw-bold mb-2" style={{ color: '#D60F14' }}>مشروبات باردة</h4>
                <p className="text-muted mb-3">عصائر طبيعية ومشروبات باردة منعشة تناسب جميع الأوقات.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="order-btn">عرض جميع الأصناف</button>
                  <span className="fw-bold">ابتداءً من ٢٥ د.أ</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* مشروبات ساخنة */}
          <div className="card shadow-sm mb-4 position-relative">
            <div className="discount-badge">10%</div>
            <div className="card-body d-flex p-0">
              <img 
                src="src/assets/cappuccino-756490_1280.jpg" 
                alt="مشروبات ساخنة" 
                className="rounded-start"
                style={{ width: '35%', height: '180px', objectFit: 'cover' }}
              />
              <div className="p-3 rtl" style={{ width: '65%' }}>
                <h4 className="fw-bold mb-2" style={{ color: '#D60F14' }}>مشروبات ساخنة</h4>
                <p className="text-muted mb-3">تشكيلة من القهوة والشاي والمشروبات الدافئة المميزة.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="order-btn">عرض جميع الأصناف</button>
                  <span className="fw-bold">ابتداءً من ٢٠ د.أ</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* سلطات */}
          <div className="card shadow-sm mb-4 position-relative">
            <div className="card-body d-flex p-0">
              <img 
                src="src/assets/salad-1264107_640.jpg" 
                alt="سلطات" 
                className="rounded-start"
                style={{ width: '35%', height: '180px', objectFit: 'cover' }}
              />
              <div className="p-3 rtl" style={{ width: '65%' }}>
                <h4 className="fw-bold mb-2" style={{ color: '#D60F14' }}>سلطات</h4>
                <p className="text-muted mb-3">سلطات طازجة غنية بالألوان والنكهات لمزيد من الانتعاش والصحة.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="order-btn">عرض جميع الأصناف</button>
                  <span className="fw-bold">ابتداءً من ٣٠ د.أ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .order-btn {
          background-color: #D60F14;
          color: #fff;
          border: none;
          border-radius: 30px;
          padding: 0.4rem 1rem;
          font-size: 0.85rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        
        .order-btn:hover {
          background-color: #bb0c12;
        }
        
        .discount-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          background: linear-gradient(45deg, #bb0c12, #cb7a7a);
          color: white;
          padding: 10px;
          font-weight: bold;
          border-radius: 50%;
          font-size: 14px;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          z-index: 1;
        }
        
        .card {
          overflow: hidden;
          border-radius: 12px;
          transition: transform 0.3s ease;
          border: none;
        }
        
        .card:hover {
          transform: scale(1.03);
        }
        
        .rtl {
          direction: rtl;
          text-align: right;
        }
      `}</style>
    </SecondSection>
  )
}

export default Menu