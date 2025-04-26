import React from 'react';
import MainButton from '../common/MainButton';

function MenuItem({ itemName, itemDesc, itemPrice, imgPath, imgAlt, discount }) {
  return (
    <div className="card shadow-sm mb-4 position-relative">
      {discount && (
        <div 
          className="position-absolute bg-danger text-white py-1 px-2 rounded-pill" 
          style={{ top: '10px', left: '10px', zIndex: 2 }}
        >
          خصم {discount}
        </div>
      )}
      
      <div className="card-body p-0">
        <div className="row g-0">
          {/* الصورة - تأخذ عرض كامل على الشاشات الصغيرة و35% على الشاشات الكبيرة */}
          <div className="col-12 col-sm-5 col-md-5 col-lg-4">
            <img
              src={imgPath}
              alt={imgAlt}
              className="img-fluid rounded-top rounded-sm-start"
              style={{ 
                width: '100%', 
                height: '180px', 
                objectFit: 'cover'
              }}
            />
          </div>
          
          {/* المحتوى النصي - يأخذ عرض كامل على الشاشات الصغيرة و65% على الشاشات الكبيرة */}
          <div className="col-12 col-sm-7 col-md-7 col-lg-8">
            <div className="p-3 rtl">
              <h4 className="fw-bold mb-2" style={{ color: '#D60F14' }}>{itemName}</h4>
              <p className="text-muted mb-3">{itemDesc}</p>
              <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center">
                <div className="mb-2 mb-sm-0">
                  <MainButton text={"عرض جميع الأصناف"} />
                </div>
                <span className="fw-bold">ابتداءً من {itemPrice} د.أ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;