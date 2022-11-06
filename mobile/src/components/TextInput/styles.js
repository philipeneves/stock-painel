import {  Dimensions, Platform } from 'react-native'
import styled from 'styled-components/native'

import colors from '../../assets/styles/colors'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

export const Label = styled.Text`
    font-size: 12px;
    line-height: 12px;
    color: ${props => props.color};
`

export const Message = styled.Text`
    position: absolute;
    bottom: -31%;
    left: 15px;
    font-size: 12px;
    color: ${colors.errorRed};
    background-color: transparent;
`

export const Input = styled.TextInput`
    position: absolute;
    top: 25px;
    left: 16px;
    bottom: 6px;
    font-size: 16px;
    line-height: 16px;
    width: 92%;
    padding: 0px;
    height: 16px;
    color: ${props => props.color};
`

export const Component = styled.View`
    border-radius: 4px;
    elevation: 0;
    height: 56px;
    margin-bottom: 16px;
    justify-content: center;
    width: ${windowWidth - 32}px;
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
    color: ${colors.white}
`
