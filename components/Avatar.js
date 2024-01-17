// next image
import Image from 'next/image';


const Avatar = () => {
  return <div className='hidden xl:flex xl:max-w-none'>
    <Image 
    src={'/pic3.png'} 
    width={1000}  
    height={150}
    alt='' 
    className='translate-z-0 w-full h-full'
    />
  </div>;
};

export default Avatar;
