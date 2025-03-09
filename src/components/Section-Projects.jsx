import { Card } from "./Card.jsx";

export function SectionProjects () {
  return (
    <section className="flex flex-col gap-8">
    <h2 className="text-center text-4xl text-white font-bold">Projects Destacados</h2>
      <div className="w-250 h-140  rounded-2xl grid grid-cols-6 grid-rows-4 gap-4">
        <Card containerClass={"row-span-3 col-span-3 rounded-2xl overflow-hidden relative"}/>
        <Card containerClass={"row-span-1 col-span-3 rounded-2xl row-start-4 overflow-hidden relative"}/>
        <div className="row-span-2 col-span-1 rounded-2xl overflow-hidden relative">
          <img className="h-full w-full object-cover" src="https://udiscovermusic.co/cdn/shop/products/602557275926_THE_WEEKND__STARBOY_CD_A.png?v=1629731025" alt="" />
        </div>
        <Card containerClass={"row-span-2 col-span-2 rounded-2xl overflow-hidden relative"}/>
        <Card containerClass={"row-span-2 col-span-3 rounded-2xl  overflow-hidden relative"}/>
    </div>
    </section>
  )
}
