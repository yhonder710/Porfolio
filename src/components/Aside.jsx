import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faStar, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react"
import { Link } from './Link.jsx';


export function Aside () {
  const [open, setOpen] = useState(false)

  const sidebar = open ? 'open on' : 'open'
  const btn = open ? '🡠' : '🡢'
  const link = open ? 'link on' : 'link'

  return (
    <>
    <aside className={sidebar}>
      <nav className="h-screen flex text-white w-full justify-center">
        <ul className="flex flex-col justify-around items-center text-4xl text-center">
          <Link link={link} text={'Inicio'} icono={<FontAwesomeIcon icon={faHouse}/>}/>
          <Link link={link} text={'Skill'} icono={<FontAwesomeIcon icon={faUser}/>}/>
          <Link link={link} text={'Projects'} icono={<FontAwesomeIcon icon={faStar}/>}/>
          <Link link={link} text={'Contact'} icono={<FontAwesomeIcon icon={faEnvelope}/>}/>
        </ul>
      </nav>
      <button className="bg-gray-950 w-12 h-12 text-2xl absolute right-[-25px] top-[50%] font-bold text-white cursor-pointer rounded-2xl border-2 border-white" onClick={() => setOpen(!open)}>{btn}</button>
    </aside>
    </>
  )
}
