import CallTypeList from "@/components/CallTypeList";

const Previous = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Previous Meetings</h1>
      <CallTypeList type="ended" />
    </section>
  );
};

export default Previous;
