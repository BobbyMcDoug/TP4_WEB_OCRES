import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


let profils = [
  {
    nom: 'Puce',
    prenom: 'Cara',
    date: '01/01/1996',
    photo:'Cara.png',
    publi: "Cara cara caraapuuucce !",
  },
  {
    nom: 'Meche',
    prenom: 'Sala',
    date: '01/01/1996',
    photo:'Sala.png',
    publi: "Salameeeeeeeeeeeeeeeeeche !",
  },
  {
    nom: 'Zarre',
    prenom: 'Bulbi',
    date: '01/01/1996',
    photo:'Bulbi.png',
    publi: "Bulbi ?",
  }
];

let n =0;



class Profil extends React.Component{
  constructor(props) {
    super(props); 
    this.state = {
      color: 'grey',
      
    }
  }

  changeColor = () => {
    if(this.state.color=="grey"){
      this.setState({color: "red"});
    }else{
      this.setState({color: "grey"})
    }
    
  }
  

  render() {
    
    return (
      
      <div>
        <center>
          <br></br>
          <div className={this.state.color}>
            <img src={profils[this.props.prof].photo}></img>
            
              <div className = "container">
              <br></br>
                <div class="row">
                  <div className="col-sm-3"></div>
                  <div className="col-sm-3"><h3>Prénom : {profils[this.props.prof].prenom}</h3></div>
                  <div className="col-sm-3"><h3>Nom : {profils[this.props.prof].nom}</h3></div> 
                </div> 
              </div>
              <br></br>
              <div><p>Date de naissance : {profils[this.props.prof].date}</p></div>
              <button 
                  onClick={this.changeColor} id="boutonStyle">
                  Change Style
              </button>    
          </div>
        </center>   
      </div>
     
    );
  }

}

class Commentaire extends React.Component{
  constructor(props) {
    super(props); 
    this.state = {
      nb:0
    }
  }

  changeNb = () => {
    profils[this.props.prof].nb = profils[this.props.prof].nb +1
    this.setState({nb: profils[this.props.prof].nb})
  }


  render() {
    
    return (
      
      <div>

        <br></br>
        
        <div className="foot">
          <p>{profils[this.props.prof].publi}</p>
          <div><button>C'est super !</button></div>
        </div>
      
      </div>
     
    );
  }
}


class Button extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      n: 0
    }
  }



  changeProfil0 = () => {
    n=0;
    this.setState({n: 0});
  }

  changeProfil1 = () => {
    n=1;
    this.setState({n: 1});
  }

  changeProfil2 = () => {
    n=2;
    this.setState({n: 2});
  }
  

  render() {
    
    return (
      
      <div>
        <center>
          <h1 className="MBook">Movie Book</h1>
          <div className="container">
            <div className="row">
              <div className="col-sm-9"></div>
              <div className="col-sm-1"><button onClick={this.changeProfil0}>Cara</button></div>
              <div className="col-sm-1"><button onClick={this.changeProfil1}>Sala</button></div>
              <div className="col-sm-1"><button onClick={this.changeProfil2}>Bulbi</button></div>
            </div>
          </div>
          <br></br>
          <Profil prof={n} />
        </center>  
        <Commentaire prof={n} />
      </div>
     
    );
  }
}

ReactDOM.render(
  <Button />,
  document.getElementById('root')
);
