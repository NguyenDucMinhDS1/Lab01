import TodoList from "./components/TodoList";

function App() {
  return (
    
    <div class="banner">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuyCdm7UuUtX6DLlAC12MWvMin7QOGeHakaiF6kPciEFe_EF0ydqn0xvZcJZJFNoWZ2S4&usqp=CAU" height = {100} width = {100}/>
      <div class="navbar">
        <h3>Betting88</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Sports</a></li>
          <li><a href="#">E-sports</a></li>
          <li><a href="#">Fishing</a></li>
          <li><a href="#">Chess</a></li>
          <li><a href="#">Lottery</a></li>
        </ul>
      </div>
      
      <div class="content">
        <h1>Easy bet</h1>
        <p>We are the most favorite website <br></br>for betting in the World</p>
        <div>
          <button type="button"><span></span>Bet Now</button>
          <button type="button"><span></span>Check Ratio</button>
        </div>
      </div>

    </div>
    
    
  );
}

export default App;
