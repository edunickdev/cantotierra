const Destacados = () => {
  return (
    <>
      <div className="col-span-12 flex flex-col justify-start">
        <h2 className="text-center text-5xl text-primary w-full pt-20 pb-4">
          Destacados
        </h2>
        <div className="grid grid-cols-12">
            <div className="col-span-1">

            </div>
          <div className="col-span-3 bg-green-300 h-[400px] w-[300px]"></div>
          <div className="col-span-3 bg-green-300 h-[400px] w-[300px]"></div>
          <div className="col-span-3 bg-green-300 h-[400px] w-[300px]"></div>
        </div>
      </div>
    </>
  );
};

export default Destacados;
