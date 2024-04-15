import MeetingTypeList from "@/components/MeetingTypeList";

const Home = () => {
  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleDateString("en-IN", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const FormattedTime = currentDate.toLocaleTimeString("en-IN", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[270px] w-full rounded-[20px] bg-cover bg-hero">
        <div className="flex flex-col h-full justify-between max-md:px-5 max-md:py-8 lg:p-8">
          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
            Upcoming Meeting at: 11:30 pm
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold uppercase">
              {FormattedTime}
            </h1>
            <p className="font-light text-sky-1">{formattedDate}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
