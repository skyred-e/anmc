import React from 'react';
import itemData from './itemData.json';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class Calc extends React.Component{
    render(){
        const mainId = this.props.id;
        const mainNum = this.props.number;
        const mainData = itemData[mainId]
        const mainMats = mainData.materials;
        return(
            <div className="Calc">
                <div>
                <Grid
                container
                justify="center"
                spacing={2}>
                    <Grid item xs={12} md={6} sm={12}>
                <Table className="mein-item">
                <TableHead>
                    <TableRow>
                        <TableCell>アイテム名</TableCell>
                        <TableCell>個数</TableCell>
                        <TableCell>龍門幣</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                <TableRow>
                <TableCell>{mainData.name}（ID：{mainId}）</TableCell>
                <TableCell>{mainNum}</TableCell>
                <TableCell>{mainData.price * mainNum}</TableCell>
                </TableRow>
                </TableBody>
                </Table>
                </Grid>
                </Grid>
                </div>
                <Grid container justify="center">
                {mainMats && mainMats.map((items)=>{
                    const subItem = itemData[items.matid];
                    const subNum = items.number * mainNum;
                    const subMats = subItem.materials;
                    return(

                        <Grid Item xs={12} md={4} lg={3} sm={12}>
                        <Table className="materials">
                            <TableHead>
                                <TableRow>
                                    <TableCell>素材アイテム名</TableCell>
                                    <TableCell>必要個数</TableCell>
                                    <TableCell>龍門幣</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            <TableRow>
                    <TableCell>{subItem.name}</TableCell>
                    <TableCell>{subNum}</TableCell>
                    <TableCell>{subItem.price * subNum}</TableCell>
                            </TableRow>
                            {subMats && subMats.map((items)=>{
                                const sSubItem = itemData[items.matid];
                                const sSubNum = items.number * subNum;
                                return(
                                    <TableRow>
                                        <TableCell>{sSubItem.name}</TableCell>
                                        <TableCell>{sSubNum}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                        </Table>
                        </Grid>

                    );
                })}
</Grid>
            </div>
        );
    }
}
export default Calc;