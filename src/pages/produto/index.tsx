import './style.css';
import Layout from "../../components/Layout";
import { VStack, Box, Heading,  Container, SimpleGrid, Divider,  } from "@chakra-ui/react";
import CheckboxProp from '../../components/checkbox';
import InputProp from '../../components/input';
import ButtonChakra from '../../components/ButtonChakra';
import FlexProps from '../../components/Flex';

export default function Tarefa() {
  
  // const [tasks, setTasks] = useState(["Tarefa 1", "Tarefa 2", "Tarefa 3", "Tarefa 4"]);

  // const addTask = () => {
  //   const newTask = prompt("Adicione a nova tarefa:");
  //   if (newTask) {
     
  //     setTasks([...tasks, newTask]);
  //   }
  // };


  // const deleteTask = (index: number) => {
  //   const newTasks = [...tasks];
  //   newTasks.splice(index, 1);
  //   setTasks(newTasks);
  // };

  return (
    <>
      <Layout>
        <></>
        <VStack>
  <Container maxW='md'>
  {/* <Container maxW='md' bg='blue.600' color='white'> */}
  <Heading textAlign='start' marginBottom='10px'>Lista de Tarefas</Heading>
  <Divider orientation='horizontal' />
  <Heading as='h6' size='xs' textAlign='start' marginTop='10px'  marginBottom='10px'> Inserir nova tarefa </Heading>
  <SimpleGrid columns={3} spacingX='40px' spacingY='20px'>
  <Box  height='100px'>
     <InputProp/>
  </Box>
  <Box height='60px'>
  <CheckboxProp/>
  </Box>
  <Box height='80px'>
    <ButtonChakra/>
  </Box>
</SimpleGrid>
<FlexProps/>
<FlexProps/>
<FlexProps/>
<FlexProps/>
  </Container>
 
</VStack>
</Layout>

      {/* <body>
        <div className="body">
          <h3>Tarefas</h3>
          <button onClick={addTask}>Adicionar Tarefa</button>
          <div className="space">
          <ul>
            {}
            {tasks.map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => deleteTask(index)}>Delete</button>
              </li>
            ))}
          </ul>
            </div>
        </div>
      </body> */}
   
    </>
  );
}
