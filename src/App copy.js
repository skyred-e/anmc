import React from 'react';
import Calc from './Calc';
import itemData from './itemData.json';
import Button from '@material-ui/core/button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import ImputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      itemId:0,
      itemNumber:0,
    };
  }

handelChangeNumber(event){
  const valNum = event.target.value;
  this.setState({itemNumber:valNum});
}

handleChageItem(event){
  const valId = event.target.value;
  this.setState({itemId:valId});
}

checkIdState(){
  if (this.state.itemId) {
    const mainId = this.state.itemId;
    const mainNumber = this.state.itemNumber;
    const mainData = itemData[mainId];
    return(
      <div>
      <table className="mein-item">
      <tbody><tr>
      <td>親アイテム名:{mainData.name}（ID：{mainId}）</td>
      <td>個数：{mainNumber}</td>
      <td>費用：{mainData.price * mainNumber}</td>
      </tr>
      </tbody>
      </table>
      <Calc
      id={mainId}
      number={mainNumber}
      />
      </div>
    );
}}

  render(){

  return (
    <div className='App'>
      <h1>アークナイツ素材計算機</h1>
      <form
      className='item'
      onSubmit={(event) => {this.handelClick(event)}}
      >
        <ImputLabel>材料を選択</ImputLabel>
        <Select id='item-list'
        labelId='item-list'
        value={this.state.itemId}
        onChange={this.handleChageItem}
        >
          {itemData.map((items)=>{
            const valId = items.id;
            const valName = items.name;
            return(
            <MenuItem value={valId}>{valName}</MenuItem>
            );
          })}
          </Select>
          <TextField id='number' label='個数' value={this.state.itemNumber} onChange={this.handelChangeNumber}/>
          <Button type='submit' variant='contained'>
            計算
          </Button>
      </form>
      {this.checkIdState()}
    </div>
  );
}
}

export default App;