import { FiSearch } from "react-icons/fi";
import { Container } from "./styled";

export function InputBusca({ valorBusca, setValorBusca }) {
  const handleChange = (event) => {
    setValorBusca(event.target.value);
  };

  return (
    <Container>
      <input
        type="text"
        value={valorBusca}
        onChange={handleChange}
      />
      <div className="lupa">
        <FiSearch />
      </div>
    </Container>
  );
}
