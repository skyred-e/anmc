import React from 'react';
import Calc from './Calc';
import itemData from './itemData.json';
import FormContlor from '@material-ui/core/FormControl'
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
      valueCheck:false,
    };
  }


  render(){
    let item;
    const changeItem = (event) =>{
      item = event.target.value;
    }

    let num;
    const changeNumber = (event) =>{
      num = event.target.value;
    }

    const handleCheckValue = () =>{
      if(item && num){
        this.setState(
          {itemId: item,
          itemNumber: num,
          valueCheck: true}
        );
      }
    }
    return(
      <div>
        <h1>アークナイツ加工アイテム計算機</h1>
          <FormContlor>
          <ImputLabel id="item-list-label">アイテムを選択</ImputLabel>
          <Select
          labelId="item-list-label"
          id="item-list-select"
          value={item}
          onChange={changeItem}
          >
            {itemData.map((items)=>{
              return(
              <MenuItem value={items.id}>{items.name}</MenuItem>
              );
            })}
          </Select>
          <TextField
          id="itemNumber"
          type="number"
          InputProps={{inputProps:{min:"1"}}}
          label="個数"
          onChange={changeNumber}
          />
          <Button
          variant="contained"
          onClick={handleCheckValue}
          >
            計算する
          </Button>
        </FormContlor>
        {this.state.valueCheck &&
        <Calc
        id={this.state.itemId}
        number={this.state.itemNumber}
        />}
      </div>
    );
  }
}

export default App;