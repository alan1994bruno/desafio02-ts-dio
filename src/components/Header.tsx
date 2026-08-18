import { Flex, Text, Box } from "@chakra-ui/react"

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => (
  <Flex
    as="header"
    bg="blue.600"
    color="white"
    height="64px"
    px="6"
    align="center"
    justify="space-between"
    boxShadow="md"
  >
    <Flex align="center" gap="3">
      <Box
        bg="white"
        color="blue.600"
        fontWeight="extrabold"
        fontSize="sm"
        px="2"
        py="1"
        borderRadius="md"
        letterSpacing="wider"
      >
        DIO
      </Box>
      <Text fontSize="xl" fontWeight="bold" letterSpacing="wide">
        {title}
      </Text>
    </Flex>
    <Text fontSize="sm" opacity={0.8}>
      Bem-vindo ao futuro financeiro
    </Text>
  </Flex>
)