import { Summary } from "../Summary";
import { Container } from "./styles";


export function Dashboard({ response, onOpenModalFilter, onOpenHistoryModal, resultFilter }) {
  const { price, compare } = response;
  return (
    <Container>
      <Summary
        price={price}
        compare={compare}
        onOpenModalFilter={onOpenModalFilter}
        onOpenHistoryModal={onOpenHistoryModal}
        resultFilter={resultFilter} />
    </Container>
  )
}