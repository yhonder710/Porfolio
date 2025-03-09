import { SkillCardBackend, SkillCardFrontend, SkillCardTools } from "./SkillCard.jsx";

export function SectionSkill () {
  return (
    <section className="w-250 h-full text-white flex flex-col gap-8">
      <h2 className="text-center text-4xl font-bold">Develope Skill</h2>
      <div className="w-full h-60 rounded-4xl overflow-hidden">
      <img className="w-full h-full object-cover" src="https://udiscovermusic.co/cdn/shop/products/602557275926_THE_WEEKND__STARBOY_CD_A.png?v=1629731025" alt="" />
      </div>
      <p className="text-left text-[17px]">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione inventore debitis consequuntur minus quos iusto ab deleniti quibusdam! Dicta aut facere ducimus nihil nisi dolor nemo magni eos reprehenderit accusamus!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione inventore debitis consequuntur minus quos iusto ab deleniti quibusdam! Dicta aut facere ducimus nihil nisi dolor nemo magni eos
      </p>
      <div className="flex gap-15">
        <SkillCardFrontend/>
        <SkillCardBackend/>
        <SkillCardTools/>
      </div>
    </section>
  )
}
