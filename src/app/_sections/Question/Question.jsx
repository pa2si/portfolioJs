import Image from 'next/image';

const Question = () => {
  return (
    <section
      className="min-h-[17rem] flex items-center bg-base-100"
      id="question"
    >
      <div
        className="mx-auto lg:w-4/6 flex items-center justify-center "
        id="about"
      >
        <div className=" min-h-full p-8 flex justify-center items-center ">
          <div className="  border-2-b-primary w-3/4 rounded-lg">
            <p className="text-5xl font-bold text-center">
              Why Choose a Custom-Built Website?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Question;
