import { CarCard, Hero, SearchBar } from '@/components'
import { fetchCars } from '@/lib/api'

export default async function Home() {
  const allCars = await fetchCars({ model: 'corolla' })

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

  return (
    <main className="overflow-hidden">
      <Hero />

      <section
        id="discover"
        className="mt-12 sm:px-16 px-6 py-4 max-w-[1440px] mx-auto"
      >
        <div
          className="flex flex-col items-start justify-start gap-y-2.5
          text-black-100"
        >
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
          <SearchBar />

          <div className="flex justify-start flex-wrap items-center gap-2">
            {/* <Filter title="fuel" /> */}
            {/* <Filter title="year" /> */}
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div
              className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2
            grid-cols-1 w-full gap-8 pt-14"
            >
              {allCars?.map((car, i) => <CarCard key={i} car={car} />)}
            </div>
          </section>
        ) : (
          <div className="mt-16 flex justify-center items-center flex-col gap-2">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </section>
    </main>
  )
}
