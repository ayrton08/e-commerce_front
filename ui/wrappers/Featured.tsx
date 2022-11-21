export const Featured = ({ children }: any) => {
  return (
    <section className="text-gray-600 body-font" id="featured">
      <div className="container px-5 py-24 mx-auto ">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Featured
          </h1>
        </div>
        <div className="flex flex-wrap -m-4 gap-4 justify-center ">
          {children}
        </div>
      </div>
    </section>
  );
};