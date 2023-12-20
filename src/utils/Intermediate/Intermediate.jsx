const Intermediate = ({ text }) => {
  return (
    <section className="min-h-[17rem] flex items-center bg-base-100">
      <div className="mx-auto lg:w-4/6 flex items-center justify-center ">
        <div className=" min-h-full p-8 flex justify-center items-center ">
          <div className="  border-2-b-primary w-3/4 rounded-lg">
            <p className="text-5xl font-bold text-center">{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Intermediate;
