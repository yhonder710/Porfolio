import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

export function Aside () {
  return (
    <>
    <aside className="bg-[#516e4f] w-10 sm:w-20 h-full px-5 py-3 text-left flex justify-between flex-col fixed ">
      <section className="bg-amber-50">logo</section>
      <section className="bg-amber-50">Skill</section>
      <section className="bg-amber-50 flex flex-col-reverse">Contacts <span className="block"><FontAwesomeIcon icon={faCircleUser} /></span></section>
      <section className="bg-amber-50">Projects</section>
    </aside>
    </>
  )
}
