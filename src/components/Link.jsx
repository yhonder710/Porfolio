
export function Link ({ link, icono, text }) {
  return (
    <li className='flex gap-5 hover:text-gray-300 cursor-pointer'> {icono}
        <a href="#" className={link}>{text}</a>
      </li>
  )
}
