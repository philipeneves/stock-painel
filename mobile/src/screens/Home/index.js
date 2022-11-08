import React, { useState } from 'react'
import {
  ActivityIndicator,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
} from 'react-native'
import {
  useNavigation,
} from '@react-navigation/native'
import moment from 'moment'

import { getStockQuote } from '../../services/api'
const { MaterialCommunityIcons } = require('@expo/vector-icons'); 

import {
  Content,
  Input,
  Search,
  Title,
  IconText,
  StockTitle,
  ValueText,
  DateText,
  StockContainer,
  Container,
  Header,
  InfoContainer,
  Card,
  Row,
  ButtonsConatiner,
  CardButton,
  CardButtonText,
  ValueTitle,
  ExptyText
} from './styles'
import Wrapper from '../../components/Wrapper'

import { Modal } from '../../components/Modal'
import Detail from '../Detail'

import { useStockState } from '../../contexts/Stock'

import colors from '../../assets/styles/colors'

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState(false)
  const [showEmptyRender, setShowEmptyRender] = useState(true)

  const navigation = useNavigation()
  const { addStock } = useStockState()

  const { mutate, data: searchResult, isError } = getStockQuote()
  const handleChange = async (value) => {
    setLoading(true)

    setShowEmptyRender(false)
    mutate(
      { stockName: value },
      {
        onError(error) {
          setShowEmptyRender(true)
          Alert.alert(error.message)
        },
        onSettled() {
          setLoading(false)
        },
      }
    )
  }

  const handleCompare = () => {
    addStock(searchResult)
    navigation.navigate('COMPARE')
  }

  const handleGoToHistory = () => {
    setVisible(true)
  }

  const date =  searchResult?.pricedAt
    ? moment(new Date(searchResult?.pricedAt)).format('DD/MM/yyyy')
    : ''

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
      <Wrapper>
        <Container>
          <Header>
            <Title>
              PAINEL DO INVESTIDOR
            </Title>

            <Search accessibilityRole='search'>
              <Input
                testID={'search'}
                placeholder='Buscar ação'
                placeholderTextColor={colors.lightGray}
                selectionColor={colors.lightGray}
                onEndEditing={(e) => {e.nativeEvent.text.length > 0 ? handleChange(e.nativeEvent.text) : Alert.alert('É necessário buscar uma ação!')} }
                maxLength={64}
              />
              <MaterialCommunityIcons
                name='magnify'
                color={colors.lightGray}
                size={18}
                style={{ marginEnd: 11, marginEnd: -9 }}
              />
            </Search>
          </Header>

          <Content>
            {loading ? (
              <ActivityIndicator style={{ marginTop: 40 }} size='large' />
            ) : (
              <>
                {!isError && searchResult?.name && (
                  <StockContainer>
                    <Card>
                      <IconText>
                        <InfoContainer>
                          <StockTitle testID={'name'}>
                            {searchResult?.name}
                          </StockTitle>
                          <Row>
                            <View>
                              <ValueTitle>
                                Valor
                              </ValueTitle>
                              <DateText>Última atualização</DateText>
                            </View>
                            <View>
                              <ValueText>
                                {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(searchResult?.lastPrice)
                                  .replace(/^(\D+)/, '$1 ')}
                              </ValueText>
                              <DateText>{date}</DateText>
                            </View>
                          </Row>
                        </InfoContainer>
                      </IconText>
                      <ButtonsConatiner>
                        <TouchableOpacity onPress={handleCompare}>
                          <CardButton index={0} bgColor={colors.secondaryButton}>
                            <CardButtonText color={colors.baseText}>
                              Comparar
                            </CardButtonText>
                          </CardButton>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleGoToHistory}>
                          <CardButton index={1} bgColor={colors.accentColor}>
                            <CardButtonText color={colors.white}>
                              Previsão de ganhos
                            </CardButtonText>
                          </CardButton>
                        </TouchableOpacity>
                      </ButtonsConatiner>
                    </Card>
                  </StockContainer>
                )}
              </>
            )}
          </Content>

          {showEmptyRender && (
            <ExptyText>Busque uma ação</ExptyText>
          )}
        </Container>
        <Modal height={400} visible={visible} close={() => setVisible(false)}>
          <Detail data={[searchResult]} setModalVisible={setVisible} />
        </Modal>
      </Wrapper>
    </TouchableWithoutFeedback>
  )
}
export default Home
