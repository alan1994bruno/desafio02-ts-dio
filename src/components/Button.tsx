import { chakra } from "@chakra-ui/react"

interface ButtonProps {
  onClick: () => void; 
  text?: string;
}

export const Button  = ({ onClick, text }: ButtonProps) => {
  return(
    <chakra.button onClick={onClick} bg="blue.500" w="100%" rounded="md" color="white" py="2" px="4" textAlign="center"  height="44px" maxHeight="44px" boxSizing="border-box" >
      {text || "Clique aqui"}
    </chakra.button>
  )
}
