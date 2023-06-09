import './App.css';
import {ethers} from 'ethers';
import GreetingContract from "./abis/HelloSolidity.json";

const greetingAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
function App() {

  console.log(window);
  async function requestAccount(){
    await window.ethereum.request({method: "eth_requestAccount"});
  }
 requestAccount();

  async function getGreeting(){
    if(window.ethereum !== "undefined"){
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(greetingAddress,GreetingContract,provider);
      
      try {
        const greeting = await contract.greet();
        console.log(greeting);
        
      } catch (err) {
        console.log(err);
      }
      
      
      console.log(contract);
        
    }
  }
  getGreeting();


  async function setGreeting(){

  }


  return (
    <>
    <div className="App">
      <header className="App-Header">
        <button onClick={getGreeting}>Get Greeting </button>
        <button>Set Greeting </button>
        <input />
      </header>
    </div>
    </>
  );
}

export default App;
