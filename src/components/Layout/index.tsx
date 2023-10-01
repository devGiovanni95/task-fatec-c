import { Grid, GridItem } from "@chakra-ui/react";
import Rodape from "../Rodape";
import Topo from "../topo";

interface Props{
    children: React.ReactNode
}

export default function Layout(props: Props){
    const {children} = props
    return(
        <>
    <Grid  className="grid" templateColumns='1fr' templateRows='auto auto 64px'>
    <GridItem colSpan={1} rowSpan={1}>
        <Topo/>
    </GridItem>
    <GridItem colSpan={1} rowSpan={1}>
        {children}
    </GridItem>
    <GridItem colSpan={1} rowSpan={1}>
        <Rodape/>
    </GridItem>
    </Grid>
    </>
        )
}