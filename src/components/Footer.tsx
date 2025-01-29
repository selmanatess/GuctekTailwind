import React from 'react'
import logo from '../assets/logo.png'
import { IoIosMail } from 'react-icons/io'
import { HiChevronDoubleRight } from 'react-icons/hi'
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white p-6">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 ">

    <div>
    <div className="flex bg-transparent w-full p-2 items-center justify-center">
  <img className="h-36 md:h-32  w-60  md:w-full aspect-auto" src={logo} alt="Logo" />
</div>
      
      <p className="text-sm 
      text-justify
      mt-4">
      Her türlü kullanım hakkı saklıdır. Bu sitede yer alan resim ve metinler Güçtek Makina Ltd. Şti.'ne aittir. Marka logoları marka sahiplerine aittir.
      </p>
    </div>

 
    <div className='flex flex-col items-center'>
      <h3 className="text-lg font-semibold mb-4">Kurumsal</h3>
      <ul className="space-y-2">
        <li className='flex flex-row'><div className='flex item center w-24'><HiChevronDoubleRight></HiChevronDoubleRight><a href="#" className="hover:underline">Hakkımızda</a></div></li>
        <li className='flex flex-row'><HiChevronDoubleRight></HiChevronDoubleRight><a href="#" className="hover:underline">Hizmetlerimiz</a></li>
        <li className='flex flex-row'><HiChevronDoubleRight></HiChevronDoubleRight><a href="#" className="hover:underline">Ürünler</a></li>
        <li><HiChevronDoubleRight></HiChevronDoubleRight><a href="/getoffer" className="hover:underline">Teklif Al</a></li>
      </ul>
    </div>

  
    <div>
      <h3 className="text-lg font-semibold mb-4">İletişim Bilgilerimiz</h3>
     
      <div className='flex flex-row items-center pt-3'>  
            <IoIosMail style={{color:'#fff', width:'28px', height:'28px'}}></IoIosMail>
            <a className='pl-2' href="mailto:info@guctekmakina.com">info@guctekmakina.com</a></div>
            <div className='flex flex-row items-center mt-2 pt-2'>
            <FaPhoneAlt style={{color:'#fff', width:'22px',height:'22px' }}></FaPhoneAlt> 
            <a className='pl-2' href="tel:+905366709954"> 0(536) 670 99 54</a>
            </div>
            <div className='flex flex-row items-center mt-2 pt-2'>
            <IoLocation style={{color:'#fff', width:'36px',height:'36px' }}></IoLocation> 
            <a className='pl-2' href="https://maps.app.goo.gl/14sgsspdSDYYmowV8?g_st=iw"> Emek mah. Ahmet rasim cad. Birdal sok. No 4</a>
            
      </div>
    </div>
  </div>

    <div className="border-t border-gray-300 mt-6 pt-6 text-center text-sm">
        <p>&copy; 2025 <a target='_blank' href='https://selmanates.com/'>Selman ATEŞ</a> . All rights reserved.</p>
    </div>
</footer>

  )
}
