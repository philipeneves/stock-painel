import { useMutation } from '@tanstack/react-query'
import { adgrowthAPI } from '.'
import { Alert } from 'react-native'

export const getStockQuote = () => {
  return useMutation((data) =>
    adgrowthAPI
      .get(`/stock/${data.stockName}/quote`).then((response) => response.data)
      .catch((error) => {
        if (error.response) {
          Alert.alert('Ação não encontrada!')
        } else {
          Alert.alert('Erro de conexão!')
        }
      })
  )
}

export const getStockHistory = (stockName, from, to) =>
  adgrowthAPI.get(`/stocks/${stockName}/history`, {
    params: { from, to },
  }).catch((error) => {
    if (error.response) {
      Alert.alert('Tente novamente!')
    }
  })

export const getStockGains = () => {
  return useMutation((data) =>
    adgrowthAPI
      .get(`/stocks/${data.stockName}/gains/`, {
        params: {
          purchasedAt: data.purchasedAt,
          purchasedAmount: data.purchasedAmount,
        },
      })
      .then((response) => response.data)
      .catch((error) => {
        if (error.response) {
          Alert.alert('Ação não encontrada!')
        }
      })
  )
}

export const getStockCompared = () => {
  return useMutation((data) =>
    adgrowthAPI
      .get(`/stocks/${data.stockName}/compare`, {
        params: {
          stocksToCompare: data.stocksToCompare,
        },
      })
      .then((response) => response.data)
      .catch((error) => {
        console.error('Ação não encontrada!')
      })
  )
}
