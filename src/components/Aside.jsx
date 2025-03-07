import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faGem, faAddressBook, faStar } from '@fortawesome/free-solid-svg-icons';

export function Aside () {
  return (
    <>
    <aside className="bg-gray-900 w-10 sm:w-20 h-full px-5 py-10 text-left flex justify-between items-center flex-col fixed border-r-[1px] border-[#f5f5f5] shadow-2xs shadow-black">
      <section className=""><FontAwesomeIcon className='text-4xl text-white' icon={faCircleUser} /></section>
      <section className=""><FontAwesomeIcon className='text-4xl text-white' icon={faStar} /></section>
      <section className=""><FontAwesomeIcon className='text-4xl text-white' icon={faAddressBook} /></section>
      <section className=""><FontAwesomeIcon className='text-4xl text-white' icon={faGem} /></section>
    </aside>
    </>
  )
}
