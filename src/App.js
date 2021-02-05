import React, { Component } from 'react';

class App extends Component {
  render() {
    
    let currentImageIndex=0;
    let customImageIndex=["_200","_400",""];
    let add="_100";
    this.handleError= ()=>{
      console.log("Called");
      add=customImageIndex[currentImageIndex];
      console.log(add);
      currentImageIndex++;
      
    }
    let image_path=`https://cdn.quicksell.co/-KpFi1XEDgH1mY5k1fSo/products${add}/-M7q3olCZCehB9AGbn2y.jpg`
    
    return (
      <div className="container">
        <img src={image_path} 
        alt="" 
        onError={()=>this.handleError()} 
        />
      </div>
    );
  }
}

export default App;
