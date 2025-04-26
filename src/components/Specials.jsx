import OneSection from '../common/OneSection';
import "../styles/SpecialsStyle.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from 'react';

function Specials() {

  const[newCard,setNewCard] = useState({
    title: "",
    discount: "",
    img: ""
  });
  const [cards,setCards] = useState([
    { id: 1, title: 'باستا السي فود', img: "src/assets/seafood.jpg", discount: '20%' },
    { id: 2, title: 'بيتزا مارغريتا', img: "src/assets/pizza-5275191_1280.jpg", discount: '15%' },
    { id: 3, title: 'برغر الدجاج', img: 'src/assets/0b87c96ab61a232f8da9c646fb6753068875c2ef.jpg', discount: '10%' },
    { id: 4, title: 'سلطة يونانية', img: 'src/assets/ab84770aa39902652af4892a0b7f2760_w750_h500.jpg', discount: '25%' },
    { id: 5, title: 'كريب نوتيلا', img: 'src/assets/كريب-حلو-بحشوات-النوتيلا.png', discount: '18%' },
    { id: 6, title: 'مقبلات مشكلة', img: 'src/assets/e2ebb73688f891e5ef695135a774dfbf-size1200.jpg', discount: '12%' },
  ]);

  const [showEditModal, setShowEditModal] = useState(false);
const [editCardData, setEditCardData] = useState({
    title: "",
    discount:"",
    img: "",
  });

 
  function handelDeleteCard(id){
    const newCards = cards.filter((card=>card.id != id));
    setCards(newCards);
  }
  function handelEditCard(id) {
    const cardToEdit = cards.find((card)=>card.id===id);
    if(cardToEdit) {
      setEditCardData(cardToEdit);
      setShowEditModal(true);
    }
  }
  function handleSaveEdit() {
    const updatedCards = cards.map(card=> {
      if (card.id === editCardData.id) {
        return editCardData;
      }
      return card;
    });
    setCards(updatedCards);
    setShowEditModal(false);
  }
  const cardsList = cards.map((card) => {
   return <SwiperSlide key={card.id}>
 <div className="card" style={{ position: "relative" }}>
                <div className='discount-badge'>{card.discount}</div>
                <img className='card-img-top' style={{minHeight:"250px"}} src={card.img} alt={card.title} />
                <div className="card-body bg-light" style={{ borderRadius: "25px" }}>
                  <h3 className='card-title'>{card.title}</h3>
                  <p className='card-text'>تمتع بمذاق بحري لا يقاوم بخصم {card.discount}!</p>
                  <button className="order-btn">اطلب الآن</button>
                  <button className="order-btn" onClick={()=> {handelDeleteCard(card.id)}}>حذف العنصر</button>
                  <button className="order-btn" onClick={()=> {handelEditCard(card.id)}}>تعديل العنصر</button>
                </div>
              </div>
   </SwiperSlide>
   ;
  });

  function handelAddingCard() {
 
   // setCards(cards.push(Card)) this is wrong , i have to create a copy of the array and add on it , then using set to pass this new copy
   setCards ([...cards,
   {
    id: cards.length+1,
    title: newCard.title,
    discount: newCard.discount,
    img: newCard.img,
   }
   ]);

    }
  return (
    <OneSection
      title={'عروض حصرية لهذا الشهر'}
      subTitle={'استفد من عروضنا الخاصة على وجباتنا المميزة! لا تفوت فرصة تذوق أطباقنا الشهية بأسعار مخفضة.'}
    >

     <div className='d-flex flex-column'>
     <input
        value={newCard.title}
        onChange={(event) => {setNewCard({...newCard,title:event.target.value})}}
        type='text'
        placeholder='title'
      >
      </input>
      <input
      type="file"
      onChange={(event) => {
        const file = event.target.files[0];
        if (file) {
          setNewCard({
            ...newCard,
            img: URL.createObjectURL(file)  // ينشئ رابط مؤقت للصورة
          });
    }
  }}
/>
{newCard.img && (
  <img src={newCard.img} alt="Uploaded Preview" style={{ width: "200px", height: "auto" }} />
)}

      <input 
      placeholder='discount'
      value={newCard.discount}
      onChange={(event) => {setNewCard({...newCard, discount: event.target.value})}}
      >
      </input>
      <button onClick={handelAddingCard}>
        Add Card Tilte
      </button>
     </div>
      <div className="container-fluid">
        <Swiper
          spaceBetween={20}
          slidesPerView={4.5}
          grabCursor={true} // يخلي شكل الماوس لما تمر فوقه زي اليد (للسحب)
          breakpoints={{
            300: {slidesPerView: 1.1},
            640: { slidesPerView: 1.5, },
            1024: { slidesPerView: 2.8}
          }}
        >
         {cardsList}
        </Swiper>
      </div>
      {showEditModal && (
  <div className="modal" style={{
    position: 'fixed', top: '0', left: '0', width: '100%', height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'
  }}>
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
      <h2>تعديل العنصر</h2>
      <input
        value={editCardData.title}
        onChange={(e) => setEditCardData({...editCardData, title: e.target.value})}
        type="text"
        placeholder="العنوان"
      />
      <input
        value={editCardData.discount}
        onChange={(e) => setEditCardData({...editCardData, discount: e.target.value})}
        type="text"
        placeholder="الخصم"
      />
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            setEditCardData({...editCardData, img: URL.createObjectURL(file)});
          }
        }}
      />
      {editCardData.img && (
        <img src={editCardData.img} alt="Preview" style={{ width: "200px", marginTop: "10px" }} />
      )}
      <br />
      <button onClick={handleSaveEdit}>حفظ التعديلات</button>
      <button onClick={() => setShowEditModal(false)}>إلغاء</button>
    </div>
  </div>
)}

    </OneSection>
    
  );
}

export default Specials;
