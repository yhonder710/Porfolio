import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faReact } from '@fortawesome/free-brands-svg-icons';
import tailwindIcon from '../assets/1.svg'

export function Card ({containerClass}) {
  return (
    <div className={containerClass}>
      <footer className="w-full h-20 bg-black opacity-75 absolute bottom-0 flex justify-between items-center p-3 z-10 gr">
        <section className="text-white ">
          <h4 className="text-2xl font-bold ">Tienda de Pc</h4>
          <div className='flex justify-center items-center gap-5 text-[30px]'>
          <FontAwesomeIcon icon={faReact} />
          <img src={tailwindIcon} width={35} alt="" />
          </div>
        </section>
        <section className='text-white flex gap-5 text-2xl'>
          <a href="#"><FontAwesomeIcon icon={faShareFromSquare} /></a>
          <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
        </section>
      </footer>
      <img className="h-full w-full object-cover hover:scale-125 transition-all" src="https://udiscovermusic.co/cdn/shop/products/602557275926_THE_WEEKND__STARBOY_CD_A.png?v=1629731025" alt="" />
    </div>
  )
}
