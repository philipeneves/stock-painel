import { Platform, Dimensions } from 'react-native'
import styled from 'styled-components/native'
import colors from '../../assets/styles/colors'

const windowWidth = Dimensions.get('screen').width

export const Label = styled.Text`
    font-size: ${Platform.OS === 'ios' ? 13 : 12}px;
    line-height: ${Platform.OS === 'ios' ? 13 : 12}px;
    background-color: ${colors.white};
    color: ${props => props.color};
`

export const Input = styled.Text`
    position: absolute;
    top: 25px;
    left: 16px;
    bottom: 6px;
    font-size: 16px;
    width: ${windowWidth / 2.5}px;
    padding: 0px;
    line-height: 16px;
    height: 16px;
    margin-top: 5px;
    color: ${props => props.color};
`

export const Component = styled.View`
    border-color: ${colors.lightGray};
    border-radius: 4px;
    border-width: 1px;
    height: 56px;
    width: 100%;
    width: ${windowWidth -32}px;
    justify-content: center;
    margin-bottom: 8px;
    background-color: ${props => props.bgColor};
    border-width: ${props => props.borderWidth}px;
    border-color: ${props => props.borderColor};
`

export const LabelArea = styled.View`
    position: absolute;
    left: 16px;
    top: 8px;
    flex-direction: row;
`

export const RequiredArea = styled.View`
    background-color: ${colors.accentColor};
    margin-left: 8px;
    padding-right: 4px;
    padding-left: 4px;
    border-radius: 12px;
    justify-content: center;
`

export const RequiredText = styled.Text`
    font-size: 9px;
    color: ${colors.grayFooter};
`