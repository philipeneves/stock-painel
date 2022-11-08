import React, { useEffect, useState } from 'react'
import { View, TouchableWithoutFeedback, Dimensions } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import moment from 'moment'

import colors from '../../assets/styles/colors'
import { formatDate } from '../../common/utils/date'

import {
    Component,
    Input,
    LabelArea,
    RequiredArea,
    RequiredText,
    Label
} from './styles'

const windowWidth = Dimensions.get('screen').width

export const DatePicker = (props) => {
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false)
    const [date, setDate] = useState(props.default ? props.default : moment().format('YYYY-MM-DD'))

    useEffect(() => {
        setDate(props.default)
    }, [props.default])

    const handleConfirmDate = async (date) => {
        await setDate(moment(date).format('YYYY-MM-DD'))
        await setIsDatePickerVisible(false)
        props.date(date)
    }

    const isDatePickerVisibleEdit = () => {
        if (props.disabled === false) setIsDatePickerVisible(!isDatePickerVisible)
    }

    return (
        <View>
            <TouchableWithoutFeedback
                onPress={() => isDatePickerVisibleEdit()}
                accessibilityLabel={props.accessibilityLabel}
            >
                <Component
                    borderColor={isDatePickerVisible ? colors.baseColor : colors.grayNeutral}
                    borderWidth={isDatePickerVisible ? 2 : 1}
                    bgColor={props.disabled ? colors.lightGray : colors.white}
                >
                    {/* Data */}
                    <Input
                        color={
                            props.disabled
                            ? colors.lightGray
                            : isDatePickerVisible === true
                            ? colors.baseText
                            : colors.lightGray
                        }
                        disabled={props.disabled}
                    >
                        {formatDate(moment(date).toDate())}
                    </Input>

                    {/* Label */}
                    <LabelArea>
                        <Label
                            color={ isDatePickerVisible ? colors.baseColor : colors.lightGray }
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
                </Component>
            </TouchableWithoutFeedback>

            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                headerTextIOS={'Escolha uma data'}
                confirmTextIOS={'Confirmar'}
                cancelTextIOS={'Cancelar'}
                locale={'pt-BR'}
                mode="date"
                onConfirm={(date) => {
                    handleConfirmDate(date)
                }}
                onCancel={isDatePickerVisibleEdit}
            />
        </View>
    )
}
export default DatePicker
