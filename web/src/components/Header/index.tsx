import { useState } from "react";
import { Container } from "./styles";

export function Header() {
  const [active, setActive] = useState(true)

  return (
    <Container>
      <h1>Projeto Finanças</h1>
    </Container>
  )
}