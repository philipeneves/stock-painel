import React from "react";
import { render } from "@testing-library/react-native";
import Button from "..";

describe('Button', () => {
    it('The component rendered', () => {
        const { getByText } = render(<Button title={'Test'} onPress={() => console.log('Test')} />)
        const element = getByText('Test')

        expect(element).toBeTruthy()
    })
})
