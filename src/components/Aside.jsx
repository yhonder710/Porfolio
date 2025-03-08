import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react"


export function Aside () {
  const [open, setOpen] = useState(false)

  const sidebar = open ? 'open on' : 'open'
  const btn = open ? '🡠' : '🡢'
  const link = open ? 'link on' : 'link'

  return (
    <>
    <aside className={sidebar}>
      <nav className="h-screen flex text-white w-full justify-center">
        <ul className="flex flex-col justify-around items-center text-5xl">
          <li className='flex gap-5'><FontAwesomeIcon icon={faCircleUser} />
            <span className={link}>logo</span>
          </li>
          <li className='flex gap-5'><FontAwesomeIcon icon={faCircleUser} />
            <span className={link}>logo</span>
          </li>
          <li className='flex gap-5'><FontAwesomeIcon icon={faCircleUser} />
           <span className={link}>logo</span>
          </li>
          <li className='flex gap-5'><FontAwesomeIcon icon={faCircleUser} />
           <span className={link}>logo</span>
          </li>
        </ul>
      </nav>
      <button className="bg-gray-950 w-12 h-12 text-2xl absolute right-[-15px] top-[50%] font-bold text-white cursor-pointer rounded-2xl border-2 border-white" onClick={() => setOpen(!open)}>{btn}</button>
    </aside>
    </>
  )
}
