import TodoList from "./components/TodoList";

function App() {
  return (
    <div class="banner">
      <div class="navbar">
        <img src="{require('/images/logo.jpg')}" class="logo"/>
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
