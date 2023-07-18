import { Filter, Hero, SearchBar } from '@/components'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <section
        id="discover"
        className="mt-12 sm:px-16 px-6 py-4 max-w-[1440px] mx-auto"
      >
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
          <SearchBar />

          <div className="flex justify-start flex-wrap items-center gap-2">
            <Filter title="fuel" />
            <Filter title="year" />
          </div>
        </div>
      </section>
    </main>
  )
}
