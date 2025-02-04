import React from 'react'
import BrandSlideBar from '../components/brandSlideBar'
import logo from '../assets/logo1.png'

export default function AboutUs() {
  return (
    <div  className='w-full h-full flex flex-col items-center justify-center'>
        <h1 className='text-start w-full md:p-6 text-xl p-4 md:text-3xl'>Hakkımızda</h1>
        <p className='p-4 md:p-6 w-full items-center justify-center '><img className='md:float-left md:w-64 md:h-64  w-32 h-32 float-none ' src={logo}></img> Firmamız, iş makinaları sektörüne yüksek kalitede yedek parça üretmek amacıyla kurulmuştur. Üretim tesisimizde, her marka ve modele uygun geniş ürün yelpazesi ile müşterilerimize en iyi çözümleri sunmaktayız. Kaliteyi üretim felsefemizin merkezine koyarak, sektörde güvenilir ve aranan bir marka haline geldik.

İleri teknolojiye dayalı üretim hattımız ve deneyimli kadromuz ile, uluslararası kalite standartlarına uygun ürünler geliştiriyoruz. Sürekli yenilenen ürün portföyümüz ve müşteri odaklı hizmet anlayışımız sayesinde, sektörümüzün en güvenilir firmalarından biri olmaya devam ediyoruz.

Kurumsal stratejimiz, sürdürülebilir büyüme ve inovasyon odaklı yatırımlarla sektöre yön vermek, müşteri taleplerine en uygun çözümleri sunmak ve küresel pazardaki rekabet gücümüzü artırmaktır. Bugün, yerel ve uluslararası pazarda güçlü bir konuma sahip olan firmamız, müşteri memnuniyetini esas alarak geleceğe emin adımlarla ilerlemektedir.

Kalite, güven ve yenilikçiliği ilke edinmiş bir firma olarak, iş makinaları yedek parça sektöründe fark yaratmaya devam ediyoruz.</p>
        <h1 className='text-start w-full md:p-6 p-3 text-xl font-bold text-orange-600'>Misyonumuz</h1>
        <p className='p-4 md:p-6 '>Müşteri memnuniyetini ön planda tutarak, her marka ve modele uygun yüksek kaliteli iş makinası yedek parçaları üretmek. Ürün yelpazemizi sürekli genişleterek, sektörün ihtiyaçlarına en hızlı ve verimli şekilde cevap vermek. Kalite standartlarımızdan ödün vermeden sürdürülebilir üretim anlayışını benimseyerek, hem yerel hem de uluslararası pazarda güvenilir bir çözüm ortağı olmak.</p>
        <h1 className='text-start w-full md:p-6 p-3 text-xl font-bold text-orange-600'>Vizyonumuz</h1>
        <p className='p-4 md:p-6 md:pt-1'> İş makinaları yedek parça imalatı sektöründe kalite, güven ve yenilikçilik anlayışıyla global ölçekte tercih edilen öncü bir marka olmak. Teknolojik gelişmeleri yakından takip ederek üretim süreçlerimizi sürekli iyileştirmek ve müşterilerimize en yüksek kaliteyi sunmak temel hedefimizdir.</p>
<BrandSlideBar></BrandSlideBar>
    </div>
  )
}
