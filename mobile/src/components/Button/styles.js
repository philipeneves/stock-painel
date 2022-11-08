import styled from 'styled-components/native'

export const Title = styled.Text`
  color: ${props => props.fontColor};
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`

export const Touchable = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${props => props.bgColor};
  border-width: 1px;
  border-color:${props => props.borderColor};
  margin-bottom: 8px;
`