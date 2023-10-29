import Image from 'next/image'
import logo from '@/assets/logo.svg'
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
   </>
  )
}
