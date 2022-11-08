import React, { useCallback, useEffect, useReducer, useState } from 'react'
import {
  ActivityIndicator,
  FlatList,
  Text,
  View
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import {
  useNavigation,
} from '@react-navigation/native'
import moment from 'moment'

import Wrapper from '../../components/Wrapper'

import { getStockHistory } from '../../services/api'

import {
  Header,
  TextHeader,
  TextSearch,
  BackButton,
  BackContainer,
  ListContainer,
  ItemContainer,
  ItemDate,
  Row
} from './styles'
import colors from '../../assets/styles/colors'

const History = ({
  route,
}) => {
  const [historyData, setHistoryData] = useState([])
  const [from, setFrom] = useState(1)
  const [to, setTo] = useState(2)
  const [showEmptyRender, setShowEmptyRender] = useState(false)
  const [loading, setLoading] = useState(true)
  const navigation = useNavigation();

  const { stockName } = route.params

  const fetchStockHistory = useCallback(async () => {
    try {
      let beginDate = moment().set({date: 1, month: 0})
      beginDate.format('YYYY-MM-DD')
      const { data: history } = await getStockHistory(stockName, beginDate.format('YYYY-MM-DD'), moment().format('YYYY-MM-DD'))

      setHistoryData((prevState) => [...prevState, ...history.prices])
    } catch (error) {
      if (error.response.status === 404) {
        setHistoryData([])
        setShowEmptyRender(true)
      } else {
        Alert.alert('Serviço indisponível.')
      }
    } finally {
      setLoading()
    }
  })

  const renderItem = ({ item }) => {
    return (
      <ItemContainer>
        <Row>
          <ItemDate>
            {moment(new Date(item.pricedAt)).format('DD/MM/YYYY')}
          </ItemDate>
          <ItemDate style={{ color: colors.black }}>
            {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.high)
              .replace(/^(\D+)/, '$1 ')}
          </ItemDate>
        </Row>
        <Text style={{ color: colors.black }}>Abriu em: {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.opening)
              .replace(/^(\D+)/, '$1 ')}</Text>
        <Text style={{ color: colors.black }}>
          Fechado em: {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.closing)
              .replace(/^(\D+)/, '$1 ')}
        </Text>
        <Text style={{ color: colors.black }}>
          Volume: {item.volume}
        </Text>
      </ItemContainer>
    )
  }

  const listEmptyComponent = () => (
    <View style={{ alignItems: 'center' }}>
      {showEmptyRender && (
        <TextSearch>Nenhum histórico encontrado.</TextSearch>
      )}
    </View>
  )

  const onEndReached = () => {
    setFrom((prevState) => prevState + 1)
    setTo((prevState) => prevState + 1)
  }

  useEffect(() => {
    fetchStockHistory()
  }, [from, to])

  return (
    <Wrapper>
      <Header>
        <BackContainer>
          <BackButton
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name='left' size={24} color={colors.white} />
          </BackButton>
          <TextHeader>HISTÓRICO</TextHeader>
        </BackContainer>
      </Header>
      {loading ? (
        <ActivityIndicator
          size='large'
          style={{ marginTop: 16 }}
          color={colors.accentColor}
        />
      ) : (
        <ListContainer>
          <FlatList
            data={historyData.reverse()}
            contentContainerStyle={{ paddingBottom: 100 }}
            keyExtractor={(item, index) => `${item.volume}-${index}`}
            renderItem={renderItem}
            onEndReached={() => onEndReached()}
            ListEmptyComponent={listEmptyComponent}
          />
        </ListContainer>
      )}
    </Wrapper>
  )
}
export default History
