import React from 'react'
import Section from '../common/Section'
import '../styles/MenuStyle.css'
import MainButton from '../common/MainButton'
import MenuItem from './MenuItem'

const Menu = () => {
  return (
    <Section
      title={'استمتع بتجربة طعام لا مثيل لها'}
      subTitle={'نقدم لك قائمة متنوعة تضم أفضل الأطباق المحلية والعالمية، لتحظى بتجربة طعام لا تُنسى.'}
      customBackgroundColor='#ff8c8c'
    >
      <div className='row'>
      {/* القائمة اليمنى */}
      <div className='col-md-6 mb-4'>
        {/* مقبلات */}
        <MenuItem
          itemName={"مقبلات"}
          itemDesc={"تشكيلة من المقبلات الباردة والساخنة لبدء وجبتك بأشهى النكهات."}
          itemPrice={"35"}
          imgAlt={"مقبلات"}
          imgPath={"src/assets/e2ebb73688f891e5ef695135a774dfbf-size1200.jpg"}
          discount={"15%"}
        />

        {/* أطباق رئيسية */}
        <MenuItem
          itemName={"أطباق رئيسية"}
          itemDesc={"أشهى الأطباق المحلية والعالمية، محضّرة بأعلى جودة ومذاق فريد."}
          itemPrice={"75"}
          imgAlt={"أطباق رئيسية"}
          imgPath={"src/assets/victoria-shes-UC0HZdUitWY-unsplash.jpg"}
        />

        {/* حلويات */}
        <MenuItem
          itemName={"حلويات"}
          itemDesc={"مجموعة مختارة من الحلويات الشرقية والغربية لإرضاء جميع الأذواق."}
          itemPrice={"40"}
          imgAlt={"حلويات"}
          imgPath={"src/assets/dessert-1786311_640.jpg"}
          discount={"20%"}
        />
      </div>

      {/* القائمة اليسرى */}
      <div className='col-md-6 mb-4'>
        {/* مشروبات باردة */}
        <MenuItem
          itemName={"مشروبات باردة"}
          itemDesc={"عصائر طبيعية ومشروبات باردة منعشة تناسب جميع الأوقات."}
          itemPrice={"2"}
          imgAlt={"مشروبات باردة"}
          imgPath={"src/assets/drink-7279404_640.jpg"}
        />

        {/* مشروبات ساخنة */}
        <MenuItem
          itemName={"مشروبات ساخنة"}
          itemDesc={"تشكيلة من القهوة والشاي والمشروبات الدافئة المميزة."}
          itemPrice={"20"}
          imgAlt={"مشروبات ساخنة"}
          imgPath={"src/assets/cappuccino-756490_1280.jpg"}
          discount={"10%"}
        />

        {/* سلطات */}
        <MenuItem
          itemName={"سلطات"}
          itemDesc={"سلطات طازجة غنية بالألوان والنكهات لمزيد من الانتعاش والصحة."}
          itemPrice={"30"}
          imgAlt={"سلطات"}
          imgPath={"src/assets/salad-1264107_640.jpg"}
        />
      </div>

      </div>
    </Section>
  )
}

export default Menu