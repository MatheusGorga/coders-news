import { useRouter } from 'next/router';
import { useCallback } from 'react';

function Layout({ children, title }) {
  const router = useRouter();

  const handleLogoClick = useCallback(() => {
    router.push(`/`);
  }, []);

  return (
    <div className='h-full min-h-screen relative'>
      <div className='w-full h-72 bg-black rounded-b-[6.25rem] pt-11 pq-32 flex justify-center items-center text-center '>
        <img
          src='/logo.png'
          alt='logo'
          className='w-36 h-14 absolute left-[10%] top-10 cursor-pointer'
          onClick={handleLogoClick}
        />

        <h1 className='text-white text-4xl w-8/12 '>{title}</h1>
      </div>
      {children}

      <div className='pb-40' />
      <footer className='w-full h-28 bottom-0 bg-black absolute flex justify-center items-center'>
        <div className='w-4/5 h-4/5 flex items-center flex-wrap'>
          <hr className=' w-full border-t border-[#ff2147]' />
          <h3 className='text-white'>
            Copyright Coder Club 2022 Todos os direitos reservados.
          </h3>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
