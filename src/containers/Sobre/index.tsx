/* eslint-disable jsx-a11y/alt-text */
import Titulo from "../../components/Titulo"
import Paragrafo from "../../components/Paragrafo"
import { GithubSecao } from "./styles"

const Sobre = () => {
  return (
    <section>
      <Titulo fontSize={16}>Sobre</Titulo>
      <Paragrafo>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus corporis quas totam, laborum consectetur perspiciatis illum enim impedit, quae recusandae delectus? Amet nisi praesentium debitis suscipit omnis eveniet velit cumque.
      </Paragrafo>
      <GithubSecao>
      <img  src="https://github-readme-stats.vercel.app/api?username=RicardoLopesFV&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
      <img  src="https://github-readme-stats.vercel.app/api/top-langs/?username=RicardoLopesFV&layout=compact&langs_count=7&theme=dracula"/>
      </GithubSecao>
    </section>
  )
}       

export default Sobre
