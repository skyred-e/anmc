import React from 'react';
import Calc from './Calc';
import itemData from './itemData.json';
import Grid from '@material-ui/core/Grid';
import FormContlor from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import ImputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      itemId:0,
      itemNumber:1,
    };
  }


  render(){
    const changeItem = (event) =>{
      this.setState({itemId: event.target.value})
    }

    const changeNumber = (event) =>{
      this.setState({itemNumber: event.target.value});
    }

    return(
      <div>
        <h1>アークナイツ加工アイテム計算機（β）</h1>
        <div className="item-form">
          <Grid
          container
          justify="center"
          alighItems="flex-start"
          >
            <Grid item xs={6} md={3} sm={6}>
          <FormContlor>
          <ImputLabel id="item-list-label">アイテムを選択</ImputLabel>
          <Select
          labelId="item-list-label"
          id="item-list-select"
          value={this.state.itemId}
          onChange={changeItem}
          style={{width:'150px'}}
          >
            {itemData.map((items)=>{
              return(
              <MenuItem value={items.id}>{items.name}</MenuItem>
              );
            })}
          </Select>
          {this.state.itemError &&
          (<FormHelperText>アイテムを選択してください。</FormHelperText>)}
          </FormContlor>
          </Grid>
          <Grid item xs={6} md={3} sm={6}>
          <FormContlor>
          <TextField
          id="itemNumber"
          type="number"
          InputProps={{inputProps:{min:"1"}}}
          label="個数"
          onChange={changeNumber}
          />
          {this.state.numberError &&
          (<FormHelperText>個数を入力してください。</FormHelperText>)}
          </FormContlor>
          </Grid>
          </Grid>
        </div>
        <Calc
        id={this.state.itemId}
        number={this.state.itemNumber}
        />
      </div>
    );
  }
}

export default App;