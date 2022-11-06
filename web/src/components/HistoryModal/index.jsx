import Modal from 'react-modal'

import imgClose from "../../assets/close.svg"
import { Container } from './styles';

export function HistoryModal({ isOpen, onCloseModal, history }) {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        overlayClassName="react-modal-overlay"
      >
        <button onClick={onCloseModal} className="react-close-modal">
          <img src={imgClose} alt="" />
        </button>
        <Container>
        <h2>Histórico de Preços da {history?.name}</h2>
        <table>
          <thead>
            <tr>
              <th>Abertura</th>
              <th>Baixo</th>
              <th>Alto</th>
              <th>Fechamento</th>
              <th>Data do preço</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody>
            {
              history?.prices?.map((values) => {
                return (
                  <tr>
                    <td>{values?.opening}</td>
                    <td>{values?.low}</td>
                    <td>{values?.high}</td>
                    <td>{values?.closing}</td>
                    <td>{values?.pricedAt}</td>
                    <td>{values?.volume}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        </Container>
      </Modal>
    </div>
  )
}