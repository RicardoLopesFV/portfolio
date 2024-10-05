import Projeto from "../../components/Projeto"
import Titulo from "../../components/Titulo"
import { Lista } from "./styles"

const Projetos = () => {
  const projetosArray = new Array(12).fill(0)

  return (
    <section>
      <Titulo fontSize={16}>Projetos</Titulo>
      <Lista>
        {projetosArray.map(() =>
          <li>
            <Projeto />
          </li>
        )}
      </Lista>
    </section>
  )
}

export default Projetos
