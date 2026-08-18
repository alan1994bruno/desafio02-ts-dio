import {
  Center,
  Input,
  Box,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Button } from './Button'

interface ICard {
  onLogin: () => void;
}

export const Card = ({ onLogin }: ICard) => {
  return (
    <Box
      backgroundColor='#FFFFFF'
      borderRadius='25px'
      padding='30px'
      width='100%'
      maxWidth='400px'
      margin='0 auto'
      flexDirection='column'
      display='flex'
      gap='10px'
      justifyContent='center'
      alignItems='center'
      boxShadow='xl'
    >
      <Center mb="2">
        <Text fontSize="2xl" fontWeight="bold" color="blue.600">
          Faça o login
        </Text>
      </Center>
      <VStack width="100%" spacing="3">
        <Input placeholder="E-mail" type="email" focusBorderColor="blue.500" />
        <Input placeholder="Senha" type="password" focusBorderColor="blue.500" />
      </VStack>
      <Center width='100%' mt="2">
        <Button onClick={onLogin} text="Entrar" />
      </Center>
    </Box>
  )
}