import React, { useState } from 'react'
import { Platform } from 'react-native'

import {
    Component,
    Input,
    Label,
    LabelArea,
    Message,
    RequiredArea,
    RequiredText,
} from './styles'
import colors from '../../assets/styles/colors'

export const TextInputComponent = (props) => {
    const [isFocused, setIsFocused] = useState(false)

    return (
        <Component
            borderColor={isFocused ? colors.baseColor : colors.grayNeutral}
            borderWidth={isFocused ? 2 : 1}
            bgColor={!props.editable ? colors.lightGray : colors.white}
        >
            {/* Input */}
            <Input
                {...props}
                textAlignVertical={Platform.OS === 'ios' ? 'auto' : 'bottom'}
                hitSlop={{ top: 30, bottom: 16, left: 1, right: 1 }}
                color={
                    !props.enabled
                    ? colors.lightGray
                    : isFocused === true
                    ? colors.baseText
                    : colors.lightGray
                }
                blurOnSubmit
            />

            {/* Label */}
            {props.label !== '' || !props.label ? (
                <LabelArea>
                    <Label
                        color={isFocused ? colors.baseColor : colors.lightGray}
                    >
                        {props.label}
                    </Label>

                    {/* Badge */}
                    {props.required && (
                        <RequiredArea>
                            <RequiredText>OBRIGATÓRIO</RequiredText>
                        </RequiredArea>
                    )}
                </LabelArea>
            ) : null}
            <Message>{props.nameError ? props.error : ''}</Message>
        </Component>
    )
}
export default TextInputComponent
