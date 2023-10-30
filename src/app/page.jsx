import Image from 'next/image'
import logo from '@/assets/logo.svg'
import googleplay1 from '@/assets/googleplay1.svg'
import applestore1 from '@/assets/applestore1.svg'
import tiktok from '@/assets/tiktok.svg'
import instagram from '@/assets/instagram.svg'
import facebook from '@/assets/facebook.svg'
import Link from 'next/link'
import ListMovie from './sections/ListMovie'
import DefaultModal from './components/ModalSignin'
import ImageSlider from './sections/ImageSlider'


export default function Home() {
  const slides = [
    { url: "/img/image-1.jpg", title: "beach" },
    { url: "/img/image-2.jpg", title: "boat" },
    { url: "/img/image-3.jpg", title: "forest" },
    { url: "/img/image-4.jpg", title: "city" },
    { url: "/img/image-5.jpg", title: "italy" },
  ];
  

  const containerStyles = {
    width: "100%",
    height: "400px",
    margin: "0 auto",
  };

  return (
   <>
  <header className='py-2 px-5 shadow-md shadow-gray-600'>
    <nav className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
      <div className='flex flex-col items-center md:flex-row md:items-center'>
        <Image src={logo} width="100" height='100' alt="Logo"></Image>
        <div className='md:mx-10 ml-2 mt-3 md:mt-0'>
          <input type="text" placeholder='Search Movie' />
        </div>
      </div>
    </nav>  
  </header>

   {/* image slider */}
   <div>
      <div style={containerStyles} >
          <ImageSlider slides={slides} />
      </div>
    </div>
     {/* image slider */}

     <div className='category mt-8 px-5 md:px-10'>
      <h1 className='font-bold text-2xl'>Browse By Category</h1>
      <div className='category-items flex flex-wrap mt-3'>
          <p className='me-2 md:me-5 mb-2 md:mb-0'>All</p>
          <p className='me-2 md:me-5 mb-2 md:mb-0'>anime</p>
          <p className='me-2 md:me-5 mb-2 md:mb-0'>action</p>
          <p className='me-2 md:me-5 mb-2 md:mb-0'>adventure</p>
          <p className='me-2 md:me-5 mb-2 md:mb-0'>science fiction</p>
      </div>
    </div>

   
   <main className='container mt-10 mx-auto'>
   
    <ListMovie/>
   </main>

   <footer className='container mx-auto mt-10 bg-stone-800 text-white text-center p-5 md:p-10'>
      <div className='flex flex-col md:flex-row justify-between mb-5'>
        <div className='w-full md:w-1/3 text-center mb-5 md:mb-0'>
          <Image src={logo} width="80" height='80'></Image>
          <p className='text-start mt-3'>Lorem ipsum, beatae fugiat nihil consequuntur itaque eaquore nam dolores ut eos esse dolor inventore expedita soluta nisi! Soluta vero totam ratione, aliquam debitis quaerat accusamus nulla a nostrum reprehenderit beatae.</p>
        </div>
        <div className='w-full md:w-1/3 text-center md:ps-5 mb-3'>
          <h2 className='font-semibold text-lg'>Tentang Kami</h2>
          <ul className='mt-3'>
            <li>Blog</li>
            <li>Layanan</li>
            <li>Karir</li>
            <li>Pusat Media</li>
          </ul>
        </div>
        <div className='w-full md:w-1/3 text-center'>
          <div className='download-items'>
            <h2 className='font-semibold text-lg'>Download</h2>
            <ul className='mt-3 flex text-center justify-center'>
              <li><Image src={googleplay1} width="80" height='80'></Image></li>
              <li><Image src={applestore1} width="80" height='80'></Image></li>
            </ul>
          </div>
          <div>
            <h2 className='font-semibold text-lg mt-5'>Social Media</h2>
            <ul className='flex mt-3 justify-center'>
              <a href="https://www.tiktok.com/@rezacnyt" target='_blank'><li className='px-3'><Image src={tiktok} width="30" height='30'></Image></li></a>
              <a href="https://www.instagram.com/reza_choirun/" target='_blank'><li className='px-3'><Image src={instagram} width="30" height='30'></Image></li></a>
              <a href="https://www.facebook.com" target='_blank'><li className='px-3'><Image src={facebook} width="30" height='30'></Image></li></a>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className='copyright-items mt-3'>
        <p>Copyright ©reza_cn All Rights Reserved</p>
      </div>
</footer>
    
   </>
  )
}
