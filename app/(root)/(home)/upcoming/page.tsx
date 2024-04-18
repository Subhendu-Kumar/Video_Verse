import CallTypeList from '@/components/CallTypeList'

const Upcoming = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Upcoming Meetings</h1>
      <CallTypeList type="upcoming" />
    </section>
  )
}

export default Upcoming