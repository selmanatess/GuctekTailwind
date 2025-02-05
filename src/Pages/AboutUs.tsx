import React from 'react';
import BrandSlideBar from '../components/brandSlideBar';
import logo from '../assets/logo1.png';

export default function AboutUs() {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center p-4 md:p-6'>
      <h1 className='text-start w-full text-xl md:text-3xl mb-4' >Hakkımızda</h1>
      
      <div className='w-full flex flex-col md:flex-row items-center md:items-start gap-6'>
        {/* Resim */}
        
        
        {/* Metin */}
        <div className='md:flex-1'>
          <p className='text-center md:text-left text-sm md:text-lg'>
      {/* Resim */}
<img 
  className='w-48 h-48 mb-2 md:w-64 md:h-64 rounded-full shadow-2xl mx-auto md:float-left md:mr-4' 
  src={logo} 
  alt='Logo' 
/>

            Firmamız, iş makinaları sektörüne yüksek kalitede yedek parça üretmek amacıyla kurulmuştur. Üretim tesisimizde, her marka ve modele uygun geniş ürün yelpazesi ile müşterilerimize en iyi çözümleri sunmaktayız. Kaliteyi üretim felsefemizin merkezine koyarak, sektörde güvenilir ve aranan bir marka haline geldik.
            <br /><br />
            İleri teknolojiye dayalı üretim hattımız ve deneyimli kadromuz ile, uluslararası kalite standartlarına uygun ürünler geliştiriyoruz. Sürekli yenilenen ürün portföyümüz ve müşteri odaklı hizmet anlayışımız sayesinde, sektörümüzün en güvenilir firmalarından biri olmaya devam ediyoruz.
            <br /><br />
            Kurumsal stratejimiz, sürdürülebilir büyüme ve inovasyon odaklı yatırımlarla sektöre yön vermek, müşteri taleplerine en uygun çözümleri sunmak ve küresel pazardaki rekabet gücümüzü artırmaktır. Bugün, yerel ve uluslararası pazarda güçlü bir konuma sahip olan firmamız, müşteri memnuniyetini esas alarak geleceğe emin adımlarla ilerlemektedir.
            <br /><br />
            Kalite, güven ve yenilikçiliği ilke edinmiş bir firma olarak, iş makinaları yedek parça sektöründe fark yaratmaya devam ediyoruz.
          </p>
        </div>
      </div>
      
      {/* Misyon */}
      <h1 className='text-start w-full text-xl font-bold text-orange-600 my-6'>Misyonumuz</h1>
      <p className='text-center md:text-left text-sm md:text-lg'>
        Müşteri memnuniyetini ön planda tutarak, her marka ve modele uygun yüksek kaliteli iş makinası yedek parçaları üretmek. Ürün yelpazemizi sürekli genişleterek, sektörün ihtiyaçlarına en hızlı ve verimli şekilde cevap vermek. Kalite standartlarımızdan ödün vermeden sürdürülebilir üretim anlayışını benimseyerek, hem yerel hem de uluslararası pazarda güvenilir bir çözüm ortağı olmak.
      </p>
      
      {/* Vizyon */}
      <h1 className='text-start w-full text-xl font-bold text-orange-600 my-6'>Vizyonumuz</h1>
      <p className='text-center md:text-left text-sm md:text-lg'>
        İş makinaları yedek parça imalatı sektöründe kalite, güven ve yenilikçilik anlayışıyla global ölçekte tercih edilen öncü bir marka olmak. Teknolojik gelişmeleri yakından takip ederek üretim süreçlerimizi sürekli iyileştirmek ve müşterilerimize en yüksek kaliteyi sunmak temel hedefimizdir.
      </p>
      
      <BrandSlideBar />
    </div>
  );
}
