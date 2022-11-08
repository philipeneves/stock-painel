import { Dimensions } from 'react-native'
import styled from 'styled-components/native'
import colors from '../../assets/styles/colors'

const windowWidth = Dimensions.get('screen').width

export const Container = styled.View`
  flex: 1;
  background-color: #f0f0f0;
`

export const TextHeader = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`

export const Search = styled.View`
  width: 100%;
  height: 48px;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.grayFooter};
  padding-right: 20px;
  padding-left: 20px;
  border-radius: 4px;
  shadow-color: ${colors.lightGray};
  shadow-offset: 0px 5px;
  shadow-opacity: 0.3;
  shadow-radius: 15px;
  elevation: 2;
`

export const Input = styled.TextInput`
  flex: 1;
  background-color: ${colors.grayFooter};
  color: ${colors.text};
  height: 48px;
  border-radius: 4px;
  font-size: 14px;
`

export const TextSearch = styled.Text`
  color: #34495E;
  font-size: 20px;
  font-weight: 600;
`

export const TextValue = styled.Text`
  color: #34495E;
  font-size: 14px;
  font-weight: 400;
`

export const EmptyTextList = styled.Text`
  color: #34495E;
  font-size: 20px;
  font-weight: 600;
`

export const TouchableItem = styled.TouchableOpacity`
  padding: 8px;
  background-color: #fff;
  border-radius: 4px;
`

export const ItemContainer = styled.View`
  width: ${(windowWidth - 72) / 2}px;
`

export const EmptyContainer = styled.View`
  align-items: center;
`

export const Separator = styled.View`
  width: 1px;
  height: 80%;
  background-color: #34495E;
  align-self: center;
  margin-right: 4px;
  margin-left: 4px;
`

export const Header = styled.View`
  background-color: #028FFF;
  justify-content: center;
  padding: 16px;
  padding-top: 16px;
  width: 100%;
`

export const ListContainer = styled.View`
  padding: 16px;
  background-color: #f0f0f0;
`

export const BackContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  margin-top: 16px;
`

export const FlatList = styled.FlatList`
  width: 100%;
  background-color: #f0f0f0;
`

export const BackButton = styled.TouchableOpacity`
  margin-right: 16px;
`

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`