import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <main className="font-quicksand flex flex-col justify-around items-center text-left indent-4 flex-1-0-auto w-4/5 mt-28 mb-2 mx-auto sm:mt-20 sm:w-4/5 md:w-3/5 lg:w-2/5">
      <h1 className="font-cabin text-3xl text-center font-semibold my-6 md:text-4xl">
        404
      </h1>
      <p classname="text-lg">PAGE NOT FOUND</p>
      <Link className="rounded-md bg-gray-200 py-4 pr-4 mb-4 md:text-xl" to="/">
        Accueil
      </Link>
    </main>
  );
};

export default Page404;
