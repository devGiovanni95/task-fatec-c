import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import {
  FcAbout,
  FcCollaboration,
  FcManager,
} from 'react-icons/fc'

interface CardProps {
  heading: string
  description: string
  icon: ReactElement
  href: string
}

const Card = ({ heading, description, icon }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          Learn more
        </Button>
      </Stack>
    </Box>
  )
}

export default function CardsHome() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'4xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Projeto React de Páginas e Tarefas 
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
        Este projeto React tem como objetivo criar várias páginas para um site simples. Teremos quatro páginas principais:
        </Text>
      </Stack>

      <Container maxW={'4xl'} mt={15}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'Página Inicial:'}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={'Esta página fornecerá uma breve apresentação do nosso projeto.'}
            href={'#'}
          />
          <Card
            heading={'Página de Contato:'}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={'Aqui, você encontrará um formulário que foi criado como parte de uma atividade anterior'}
            href={'#'}
          />
          <Card
            heading={'Página "Sobre"'}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={'Nesta página, apresentaremos informações sobre quem desenvolveu o projeto e sua finalidade.'}
            href={'#'}
          />
          <Card
            heading={'Página de Tarefas:'}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={'A última página listará uma série de tarefas relacionadas ao projeto'}
            href={'#'}
          />
        </Flex>
      </Container>
    </Box>
  )
}