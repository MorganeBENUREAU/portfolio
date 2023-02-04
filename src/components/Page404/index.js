import { Link } from 'react-router-dom';

const Page404 = () => {
  
  return (

    <main className="flex flex-col items-center min-h-[calc(100vh-82px-40px)] justify-evenly mt-20 p-1 md:p-4">

      <h1 className="font-petitFormalScript text-3xl text-center font-semibold my-6 md:text-4xl">404</h1>
      <p classname="font-poppins text-lg">PAGE NOT FOUND</p>
      <Link 
        className="rounded-md bg-pink-900/[.14] p-4 mb-4 md:text-xl" 
        to="/">
          Accueil
      </Link>
      
    </main>
  )
};


export default Page404;