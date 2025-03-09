
import { SectionProjects } from "./Section-Projects.jsx";
import { SectionSkill } from "./Section-skill.jsx";


export function Main (){
  return(
    <main className="w-full h-full pl-30 flex flex-col justify-center items-center gap-15 py-8">
      <SectionSkill/>
      <SectionProjects/>
    </main>
  )
}
