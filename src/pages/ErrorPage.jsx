import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <div className="bg-zinc-800 min-h-screen text-white flex justify-center items-center flex-col gap-4">
        <h1 className="font-bold text-5xl">Oops!</h1>
        <p>Something went wrong.</p>
        <p className="font-bold text-xl">{error.statusText || error.message}</p>
      </div>
    </>
  );
};

export default ErrorPage;
