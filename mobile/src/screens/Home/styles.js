import { Dimensions } from 'react-native'
import styled from 'styled-components/native'
import colors from '../../assets/styles/colors'

const windowWidth = Dimensions.get('screen').width

export const Container = styled.View`
  flex: 1;
  background-color: #F0F0F0;
`

export const Header = styled.View`
  background-color: #028FFF;
  justify-content: center;
  padding: 16px;
  padding-top: 64px;
  width: 100%;
`

export const TextHeader = styled.View`
  color: #34495E';
  font-size: 32px;
  font-weight: 600;
`

export const ImageHeader = styled.View`
  width: 40px;
  height: 40px;
  background-color: ${colors.blueHeader};
  border-radius: 4px;
`

export const ModalView = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  border-top-left-radius: 45px;
  background-color: ${colors.grayNeutral};
`

export const Title = styled.Text`
  color: ${colors.white};
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 16px;
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
  height: 36px;
  border-radius: 4px;
  font-size: 14px;
`

export const Content = styled.View`
  width: 100%;
`

export const StockContainer = styled.View`
  padding: 16px;
`

export const IconText = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 8px;
  padding-left: 8px;
  padding-top: 8px;
  padding-bottom: 16px;
`

export const InfoContainer = styled.View`
  width: 100%;
`

export const StockTitle = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: #34495E;
`

export const ExptyText = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: #34495E;
  text-align: center;
`

export const ValueTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #34495E;
  text-align: left;
`

export const ValueText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #34495E;
  text-align: right;
`

export const DateText = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #34495E;
  text-align: right;
`

export const ButtonContainer = styled.View`
  width: 80%;
  z-index: 1;
  shadow-color: ${colors.lightGray};
  shadow-offset: 0px 5px;
  shadow-opacity: 0.3;
  shadow-radius: 15px;
  elevation: 2;
`

export const Card = styled.View`
  border-radius: 4px;
  background-color: ${colors.white};
  elevation: 3;
`

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const ButtonsConatiner = styled.View`
  flex-direction: row;
  width: 100%
`

export const CardButton = styled.View`
  background-color: ${props => props.bgColor};
  width: ${(windowWidth - 32) / 2}px;
  height: 48px;
  border-bottom-start-radius: ${props => props.index === 0 ? '4px': '0px'};
  border-bottom-end-radius: ${props => props.index !== 0 ? '4px': '0px'};
  justify-content: center;
  align-items: center;
`

export const CardButtonText = styled.Text`
  font-size: 14px;
  color: ${props => props.color};
`