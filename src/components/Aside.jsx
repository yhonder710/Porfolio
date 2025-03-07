import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faGem, faAddressBook, faStar } from '@fortawesome/free-solid-svg-icons';

export function Aside () {
  return (
    <>
<<<<<<< HEAD
    <aside className="bg-[#516e4f] w-15 sm:w-20 h-full px-3 py-3 text-left flex justify-between flex-col fixed ">
      <section className="bg-amber-50">logo</section>
      <section className="bg-amber-50">Skill</section>
      <section className="bg-amber-50 flex flex-col-reverse"><FontAwesomeIcon icon={faCircleUser} /></section>
      <section className="bg-amber-50">Projects</section>
=======
    <aside className="bg-gray-900 w-10 sm:w-20 h-full px-5 py-10 text-left flex justify-between items-center flex-col fixed border-r-[1px] border-[#f5f5f5] shadow-2xs shadow-black">
      <section className=""><FontAwesomeIcon className='text-4xl text-white' icon={faCircleUser} /></section>
      <section className=""><FontAwesomeIcon className='text-4xl text-white' icon={faStar} /></section>
      <section className=""><FontAwesomeIcon className='text-4xl text-white' icon={faAddressBook} /></section>
      <section className=""><FontAwesomeIcon className='text-4xl text-white' icon={faGem} /></section>
>>>>>>> 35bb750 (reformacion)
    </aside>
    </>
  )
}
