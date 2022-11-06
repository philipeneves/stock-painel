import { useState } from 'react';
import { Container, Content, Row } from "./styles";
import { formatDate } from "../../common/functions";
import { Api } from '../service/api';
import search from "../../assets/search.png"

export function Summary({ price, compare, onOpenModalFilter, onOpenHistoryModal, resultFilter }) {
  const [name, setName] = useState('')
  const [compareName, setCompareName] = useState('')
  const [error, setError] = useState(false)

  async function getData() {
    let to = new Date().toISOString().split('T')[0]
    let from = new Date(new Date().setMonth(0))
    from = new Date(from.setDate(1))
    from = from.toISOString().split('T')[0]

    if (name.length) {
      const api = new Api();
      const resultStockCurrentPriceRoute = await api.getStockCurrentPrice(name);
      const resultStockHistoryRoute = await api.getStockHistory(name, from, to);
  
      if (resultStockCurrentPriceRoute?.message) {
        resultFilter({}) 
        setError(true)
        alert("Ação não encontrada!")
      }
      else {
        setError(false)
        resultFilter({
          price: resultStockCurrentPriceRoute,
          history: resultStockHistoryRoute,
        }) 
      }
    } else {
      alert("É necessário inserir o nome da ação!")
    }

  }

  return (
    <div>
      <Container>
        <div>
          <header>
            <h2>Ação</h2>
            {!price &&
              <>
                <h1>{error ? `Ação não encontrada` : `Nenhuma ação selecionada`}</h1>
              </>
            }
            <Row>
              <input
                maxLength={4}
                type="text"
                placeholder="Ex: AMZN"
                value={name}
                onChange={event => setName(event.target.value)} />
              <button onClick={getData}>
                <img src={search} alt="Filtro" />
              </button>
              <button className="button-filter" onClick={onOpenModalFilter}>
                Busca avançada
              </button>
            </Row>
            {price && !error &&
              <>
                <h2 className='name'>{price?.name}</h2>
                <h3>Preço:&nbsp;<strong> R$ {price?.lastPrice}</strong></h3>
                <h3>Atualização:&nbsp;<strong>{formatDate(price?.pricedAt)}</strong></h3>
                <button className="button-filter" onClick={onOpenHistoryModal}>
                  Ver histórico
                </button>
              </>}
          </header>
        </div>
        {price &&
          <div>
            <h2>Comparação de Ações</h2>

            {!compare &&
              <h1>Nenhuma ação para comparação selecionada</h1>
            }

            <Row>
              <input
                maxLength={4}
                type="text"
                placeholder="Ex: AMZN"
                value={compareName}
                onChange={event => setCompareName(event.target.value)} />
              <button onClick={getData}>
                <img src={search} alt="Filtro" />
              </button>
            </Row>

            <Content>
              {compare &&
                compare?.lastPrices?.map((values) => {
                  return (
                    <>
                      <div>
                        <ul>
                          <li>Name:</li>
                          <li>Preço:</li>
                          <li>Data:</li>
                        </ul>
                        <ul>
                          <li>{values?.name}</li>
                          <li className="prices">$ {values?.lastPrice}</li>
                          <li>{values?.pricedAt}</li>
                        </ul>
                      </div>

                      <div>
                        <ul>
                          <li>Name:</li>
                          <li>Preço:</li>
                          <li>Data:</li>
                        </ul>
                        <ul>
                          <li>{values?.name}</li>
                          <li className="prices">$ {values?.lastPrice}</li>
                          <li>{values?.pricedAt}</li>
                        </ul>
                      </div>
                    </>
                  )
                })
              }
            </Content>
          </div>}
      </Container>
    </div>
  )
}