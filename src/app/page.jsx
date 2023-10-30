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
      <nav className='flex container mx-auto justify-between items-center'>
        <Image src={logo} width="100" height='100'></Image>
          <div>
              <input type="text" placeholder='Search Movie' />
          </div>
          <div>
              <DefaultModal>Sign in</DefaultModal>
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

     <div className='category mt-5 px-10'>
        <h1 className='font-bold text-2xl'>Browse By Category</h1>
          <div className='category-items flex mt-3'>
              <p className='me-5'>All</p>
              <p className='me-5'>anime</p>
              <p className='me-5'>action</p>
              <p className='me-5'>adventure</p>
              <p className='me-5'>science fiction</p>
          </div>
     </div>
   
   <main className='container mt-10 mx-auto'>
   
    <ListMovie/>
   </main>

   <footer className='container mx-auto mt-10 bg-stone-800 text-white text-center p-10'>
        <div className='flex justify-between mb-5'>
          <div className='w-1/3'>
            <Image src={logo} width="80" height='80'></Image>
            <p className='text-start mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, voluptas amet repudiandae corrupti nesciunt molestiae dolorem ab aliquam beatae fugiat nihil consequuntur itaque eaque nulla maiores labore nam dolores ut eos esse dolor inventore expedita soluta nisi! Soluta vero totam ratione, aliquam debitis quaerat accusamus nulla a nostrum reprehenderit beatae.</p>
          </div>
          <div className='w-1/3 text-center ps-5'>
            {/* Bagian Footer 2 */}
            <h2 className='font-semibold text-lg'>Tentang Kami</h2>
            <ul className='mt-3'>
              <li>Blog</li>
              <li>Layanan</li>
              <li>Karir</li>
              <li>Pusat Media</li>
            </ul>
          </div>
          <div className='w-1/3 text-center'>
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
                  <a href="https://www.facebook.com/?locale=id_ID" target='_blank'><li className='px-3'><Image src={facebook} width="30" height='30'></Image></li></a> 
                </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className='copyright-items mt-3'>
              <p>Copyright ©reza_cn All Rights Reserved</p>
          </div>
      </footer>
      {/* Footer */}
   </>
  )
}
