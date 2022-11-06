import React, { useState, useEffect } from 'react'
import { ActivityIndicator, Alert } from 'react-native'
import {
  useNavigation,
} from '@react-navigation/native'
import moment from 'moment'

import Button from '../../components/Button'
import DatePicker from '../../components/DatePicker'
import TextInput from '../../components/TextInput'

import { getStockGains } from '../../services/api'

import {
  AlignItem,
  Container,
  Content,
  TextDate,
  Title,
  Values,
  ButtonContainer
} from './styles'
import colors from '../../assets/styles/colors'

const VALID = /^[1-9]{1}[0-9]*$/

const Detail = ({ data, setModalVisible }) => {
  const navigation = useNavigation()

  const handleGoToHistory = () => {
    setModalVisible(false)
    navigation.navigate('HISTORY', {
      stockName: data[0]?.name,
    })
  }

  const { mutate, data: gainsResult } = getStockGains()

  const [purchasedAt, setPurchasedAt] = useState(moment().subtract({ hours: 3 }))
  const [purchasedAmount, setPurchasedAmount] = useState('')
  const [purchasedAmountErr, setPurchasedAmountErr] = useState(false)
  const [query, setQuery] = useState(gainsResult)
  const [loading, setLoading] = useState(false)

  const obj = {
    stockName: data[0]?.name,
    purchasedAt: moment(purchasedAt).format('YYYY-MM-DD'),
    purchasedAmount: purchasedAmount,
  }

  const consultGains = () => {
    if (query) {
      setQuery('')
    } else {
      const diff = moment().diff(moment(purchasedAt), 'days')
      if (diff > 0 && purchasedAmount) {
        setLoading(true)
        mutate(obj, {
          onError(error) {
            setModalVisible(false)
            Alert.alert('Serviço indisponível.')
          },
        })
        setTimeout(() => {
          setLoading(false)
        }, 2000);
      } else {
        Alert.alert(diff <= 0 ? 'Data não pode ser maior ou igual a hoje!' : 'É necessário inserir uma quantidade')
        setPurchasedAmountErr(true)
      }
    }
  }

  useEffect(() => {
    setQuery(gainsResult)
  }, [gainsResult])

  return (
    <Container>
      <AlignItem>

        <TextDate>{obj.stockName}</TextDate>
          {loading ?
            <ActivityIndicator color={colors.accentColor} /> :
            query ?
            <>
              <Content>
                <AlignItem>
                  <Title>Quantidade comprada</Title>
                  <Values>
                    {gainsResult?.purchasedAmount}
                  </Values>
                </AlignItem>

                <AlignItem>
                  <Title>Último preço</Title>
                  <Values>
                    {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(gainsResult?.lastPrice)
                      .replace(/^(\D+)/, '$1 ')}
                  </Values>
                </AlignItem>

                <AlignItem>
                  <Title>Capital de ganhos</Title>
                  <Values>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(gainsResult?.capitalGains)
                      .replace(/^(\D+)/, '$1 ')}</Values>
                </AlignItem>
              </Content>
            </> : 
            <>
              <DatePicker
                label={'Data da compra'}
                type={'generic'}
                required
                date={(value) => setPurchasedAt(value)}
                activeColor={colors.baseColor}
                disabled={false}
                default={purchasedAt}
                hasNext={false}
                next={() => (() => {})}
              />
              <TextInput
                label={'Quantidade comprada'}
                required
                editable={true}
                nameError={purchasedAmountErr}
                error={!purchasedAmountErr ? '' : purchasedAmount === '' ? 'Campo obrigatório!' : ''}
                value={purchasedAmount}
                keyboardType={'numeric'}
                onChangeText={async (value) => {
                  setPurchasedAmountErr(false)
                  if (value === '') {
                    await setPurchasedAmount('')
                    return
                  }
                  if (!VALID.test(value)) {
                    return
                  } else {
                    await setPurchasedAmount(value)
                  }
                }}
            />
            </>}
      </AlignItem>

      <ButtonContainer>
        <Button
            onPress={consultGains}
            title={query ? 'Nova consulta' : 'Consultar Previsão'}
            bgColor={colors.baseColor}
            borderColor={colors.baseColor}
            fontColor={colors.white}
        />
        <Button
            onPress={handleGoToHistory}
            title={'Ver histórico'}
            bgColor={colors.white}
            borderColor={colors.baseColor}
            fontColor={colors.baseColor}
        />
      </ButtonContainer>
    </Container>
  )
}
export default Detail
