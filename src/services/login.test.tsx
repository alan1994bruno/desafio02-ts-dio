import { render, screen, fireEvent } from '@testing-library/react'
import { login } from "./login"
import { Button } from "../components/Button"
import { ChakraProvider } from "@chakra-ui/react"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    beforeEach(() => {
        mockAlert.mockClear()
    })

    it('Deve exibir um alert com boas-vindas personalizado', () => {
        login()
        expect(mockAlert).toHaveBeenCalledWith('Boas-vindas, Bruno!')
    })

    it('Deve disparar a função login ao clicar no botão', () => {
        const mockLogin = jest.fn()
        render(
            <ChakraProvider>
                <Button onClick={mockLogin} text="Entrar" />
            </ChakraProvider>
        )
        const button = screen.getByText('Entrar')
        fireEvent.click(button)
        expect(mockLogin).toHaveBeenCalledTimes(1)
    })
})