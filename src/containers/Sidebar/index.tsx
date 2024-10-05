/* eslint-disable jsx-a11y/alt-text */

import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"
import { BotaoTema, Descricao, SidebarContainer } from "./styles"

const Sidebar = () => {
  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Titulo fontSize={19}>Ricardo Lopes</Titulo>
        <Paragrafo tipo="secundario" fontSize={15}>RicardoLopesFV</Paragrafo>
        <Descricao tipo="principal" fontSize={12}>Engenheiro Front-end</Descricao>
        <BotaoTema>Trocar tema</BotaoTema>
      </SidebarContainer>
    </aside>
  )
}

export default Sidebar
