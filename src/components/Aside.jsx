import { useState } from "react"


export function Aside () {
  const [open, setOpen] = useState(false)

  const sidebar = open ? 'open on' : 'open'

  return (
    <>
    <aside className={sidebar}>
      <button className="bg-gray-950 w-12 h-12 text-2xl absolute right-[-15px] top-[50%] font-bold text-white cursor-pointer rounded-2xl border-2 border-white" onClick={() => setOpen(!open)}>🡢</button>
    </aside>
    </>
  )
}
