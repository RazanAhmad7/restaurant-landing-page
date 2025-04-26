import React, { useState } from 'react'
import OneSection from '../common/OneSection'

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكن إضافة منطق إرسال البيانات إلى الخادم
    alert('تم إرسال طلب الحجز بنجاح! سنتواصل معك قريباً لتأكيد الحجز.');
    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      notes: ''
    });
  };

  return (
    <OneSection 
      title={'احجز طاولتك الآن'}
      subTitle={'اجعل تجربتك معنا لا تُنسى واحجز طاولتك مسبقًا.'}
    >
      <div className="reservation-container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-10">
            <div className="reservation-form-container">
              <form onSubmit={handleSubmit} className="reservation-form rtl">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">الاسم الكامل</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <label className="form-label">رقم الهاتف</label>
                    <input 
                      type="tel" 
                      className="form-control" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">التاريخ</label>
                    <input 
                      type="date" 
                      className="form-control" 
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <label className="form-label">الوقت</label>
                    <input 
                      type="time" 
                      className="form-control" 
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-3">
                  <label className="form-label">عدد الأشخاص</label>
                  <select 
                    className="form-select" 
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                  >
                    <option value="1">1 شخص</option>
                    <option value="2">2 شخص</option>
                    <option value="3">3 أشخاص</option>
                    <option value="4">4 أشخاص</option>
                    <option value="5">5 أشخاص</option>
                    <option value="6">6 أشخاص</option>
                    <option value="7">7 أشخاص</option>
                    <option value="8">8 أشخاص</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label className="form-label">ملاحظات إضافية</label>
                  <textarea 
                    className="form-control" 
                    rows="3" 
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="أي متطلبات خاصة أو تفضيلات"
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button type="submit" className="reservation-btn">تأكيد الحجز</button>
                </div>

                <div className="reservation-note mt-3">
                  <p>* يرجى الحجز قبل يوم واحد على الأقل. للمجموعات الكبيرة (أكثر من 8 أشخاص)، يرجى الاتصال بنا مباشرة</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .reservation-container {
          margin-top: 20px;
        }
        
        .rtl {
          direction: rtl;
          text-align: right;
        }
        
        .reservation-form-container {
          background-color: #fff;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .form-label {
          font-weight: 500;
          color: #333;
          margin-bottom: 5px;
        }
        
        .form-control, .form-select {
          padding: 12px;
          border-radius: 8px;
          border: 1px solid #ddd;
          background-color: #f9f9f9;
          transition: all 0.3s ease;
        }
        
        .form-control:focus, .form-select:focus {
          border-color: #D60F14;
          box-shadow: 0 0 0 3px rgba(214, 15, 20, 0.1);
        }
        
        .reservation-btn {
          background-color: #D60F14;
          color: #fff;
          border: none;
          border-radius: 30px;
          padding: 10px 30px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .reservation-btn:hover {
          background-color: #bb0c12;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(214, 15, 20, 0.2);
        }
        
        .reservation-note {
          font-size: 0.85rem;
          color: #777;
          text-align: center;
        }
      `}</style>
    </OneSection>
  )
}

export default Reservations