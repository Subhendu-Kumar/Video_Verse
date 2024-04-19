import CallTypeList from '@/components/CallTypeList'

const Recordings = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Call Recordings</h1>
      <CallTypeList type='recordings'/>
    </section>
  )
}

export default Recordings