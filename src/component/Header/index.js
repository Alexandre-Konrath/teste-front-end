import logo from '../../assets/img/128x128.png'
import { Container } from "./styled";

export function Header() {
  return (
    <Container>
      <div className="img-logo">
        <img src={logo} alt="Logo" className="logo"/>
      </div>
      <div className="title">
        <h1>Teste de Desenvolvedor Front<strong>-</strong>End <strong>-</strong> Anota AI</h1>
        <div className="nome">
          <span>—</span> <p> Alexandre de Lima Konrath </p> <span> ———————————</span>
        </div>
      </div>
    </Container>
  )
}
