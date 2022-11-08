import styled from 'styled-components/native'
import colors from '../../assets/styles/colors'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 16px
`

export const TextDate = styled.Text`
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 20px;
  text-align: center;
`

export const Content = styled.View`
  width: 100%;
  justify-content: space-around;
  padding-right: 10px;
  padding-left: 10px;
  margin: 10px;
`

export const Title = styled.Text`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 10px;
  color: ${colors.text};
  text-align: left;
`

export const Values = styled.Text`
  font-size: 14px;
  margin-bottom: 10px;
  color: ${colors.lightGray};
`

export const AlignItem = styled.View`
  align-items: center;
`

export const ButtonContainer = styled.View`
  position: absolute;
  bottom: 24px;
  left: 16px;
  right: 16px;
  
`