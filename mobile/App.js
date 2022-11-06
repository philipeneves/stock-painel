import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { View, LogBox } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import GlobalContext from './src/contexts'
import Routes from './src/routes'

const App = () => {
  const queryClient = new QueryClient()
  LogBox.ignoreLogs(['Setting a timer'])

  return (
    <View style={{flex: 1}}>
      <GlobalContext>
        <QueryClientProvider client={queryClient}>
          <StatusBar style='auto' />
          <Routes />
        </QueryClientProvider>
      </GlobalContext>
    </View>
  )
}

export default App