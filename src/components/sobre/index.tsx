import { Avatar, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react'

export default function SobreProps() {
  return (
    <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Text fontSize={{ base: 'xl', md: '2xl' }} textAlign={'center'} maxW={'3xl'}>
      Entusiasta da tecnologia apaixonada por resolver problemas por meio do desenvolvimento de software.
Estou sempre em busca de novos desafios que me permitam aprender e crescer como profissional. Tenho conhecimentos em diferentes áreas, desde desenvolvimento web até análise de dados.
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src={
            'https://carolainealexandre.github.io/Carolaine-Alexandre/img/perfil.PNG'
          }
          mb={2}
        />

        <Text fontWeight={600}>Olá! Sou a</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Carolaine Alexandre
        </Text>
      </Box>
    </Stack>
  )
}