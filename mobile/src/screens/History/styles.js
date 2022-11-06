import styled from 'styled-components/native'
import colors from "../../assets/styles/colors"

export const Header = styled.View`
  background-color: #028FFF;
  justify-content: center;
  padding: 16px;
  padding-top: 48px;
  width: 100%;
`

export const TextSearch = styled.Text`
  color: ${colors.black};
  font-size: 20px;
  font-weight: 600;
  margin-top: 50px;
`

export const TextHeader = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  text-align: center
`

export const BackButton = styled.TouchableOpacity`
  margin-right: 16px;
`

export const BackContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const ListContainer = styled.View`
  width: 100%;
  padding: 16px;
`

export const ItemContainer = styled.View`
  width: 100%;
  background-color: #fff;
  padding: 16px;
  margin-bottom: 8px;
  border-radius: 4px;
`

export const ItemDate = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #34495E;
`

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
