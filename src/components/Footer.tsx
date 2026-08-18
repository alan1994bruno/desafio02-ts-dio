import { chakra } from "@chakra-ui/react"

export const Footer  = () => {
  return(
    <chakra.footer bg="blue.500" color="white" py="2" px="4" textAlign="center"  height="44px" maxHeight="44px" boxSizing="border-box" >
      Todos os direitos reservados - {new Date().getFullYear()}
    </chakra.footer>
  )
}
