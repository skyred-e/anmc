import React from 'react';
import itemData from './itemData.json';
import Grid from '@material-ui/core/Grid';

class Calc extends React.Component{
    render(){
        const mainId = this.props.id;
        const mainNum = this.props.number;
        const mainMats = itemData[mainId].materials;
        return(
            <div className="Calc">
                <Grid
                container
                justify="center"
                alighItems="flex-start">
                {mainMats && mainMats.map((items)=>{
                    const subItem = itemData[items.matid];
                    const subNum = items.number * mainNum;
                    const subMats = subItem.materials;
                    return(
                        <Grid Item xs={3}>
                        <table className="materials"><tbody>
                            <tr>
                    <td>{subItem.name}</td>
                    <td>{subNum}</td>
                    <td>{subItem.price * subNum}</td>
                            </tr>
                            {subMats && subMats.map((items)=>{
                                const sSubItem = itemData[items.matid];
                                const sSubNum = items.number * subNum;
                                return(
                                    <tr>
                                        <td>{sSubItem.name}</td>
                                        <td>{sSubNum}</td>
                                        <td>{sSubItem.price * sSubNum}</td>
                                    </tr>
                                );
                            })}
                        </tbody></table></Grid>
                    );
                })}
                </Grid>
            </div>
        );
    }
}
export default Calc;