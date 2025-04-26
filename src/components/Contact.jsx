import React, { useState } from 'react'
import Section from '../common/Section'
import '../styles/ContactStyle.css'
import MainButton from '../common/MainButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <Section
      title={'تواصل معنا'}
      subTitle={'نحن هنا للإجابة على أسئلتك أو مساعدتك في أي شيء تحتاجه.'}
    >
      <div className="contact-container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-12 contact-form-container">
            {formSubmitted ? (
              <div className="form-success-message">
                <div className="success-icon">✓</div>
                <h3>تم إرسال رسالتك بنجاح!</h3>
                <p>شكراً لتواصلك معنا، سنقوم بالرد عليك في أقرب وقت ممكن.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form rtl">
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
                    <label className="form-label">البريد الإلكتروني</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">رقم الهاتف</label>
                    <input 
                      type="tel" 
                      className="form-control" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <label className="form-label">الموضوع</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="form-label">الرسالة</label>
                  <textarea 
                    className="form-control" 
                    rows="5" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <MainButton type={"submit"} text={"ارسل الرسالة"} />
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

    </Section>
  )
}

export default Contact