import React from "react";
import { render, act, fireEvent, waitFor } from "@testing-library/react-native";
import Home from '..'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import renderer from 'react-test-renderer'

describe('Home', () => {
    const queryClient = new QueryClient();
    test('The component rendered', () => {
        const { getByTestId } = render(<QueryClientProvider client={queryClient}><Home /></QueryClientProvider>)
        const searchInput = getByTestId('search')
        expect(searchInput)
    })
})