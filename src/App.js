
import './App.css';

function App() {
  const size = 400;
  const currentPageURL = window.location.href;
  console.log(currentPageURL)
  return (
    <div className='container'>
      <img src={`https://picsum.photos/${size}`} alt='img'/>
      <button>Share</button>
    </div>
  );
}

export default App;
