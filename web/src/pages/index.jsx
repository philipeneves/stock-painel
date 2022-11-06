import { useState } from "react";
import Modal from "react-modal";
import { ModalFilter } from "../components/ModalFilter";
import { HistoryModal } from "../components/HistoryModal";
import { Dashboard } from "../components/Dashboard";
import { Header } from "../components/Header";

import { GlobalStyles } from "../styles/global-styles";

Modal.setAppElement("#root");

export function App() {
  const [isOpenFilter, setIsOpenFilter] = useState(false)
  const [isOpenHistory, setIsOpenHistory] = useState(false)
  const [result, setResult] = useState({});
  
  function handleOpenModalFilter() {
    setIsOpenFilter(true)
  }
  
  function handleOpenHistoryModal() {
    console.log('aaa')
    setIsOpenHistory(true)
  }
  
  function handleCloseModals() {
    setIsOpenFilter(false)
    setIsOpenHistory(false)
  }

  const { history } = result;
  return (
    <div>
      <Header />
      <Dashboard
        response={result}
        onOpenHistoryModal={handleOpenHistoryModal}
        onOpenModalFilter={handleOpenModalFilter}
        resultFilter={setResult} />
      <ModalFilter
        isOpen={isOpenFilter}
        resultFilter={setResult}
        onCloseModalFilter={handleCloseModals}
      />
      <HistoryModal
        isOpen={isOpenHistory}
        onCloseModal={handleCloseModals}
        history={history}
      />
      <GlobalStyles />
    </div>
  )
}