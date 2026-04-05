import './App.css'

function App() {
  return (
    <div className="app">
      <div className='cards'>
        <div className='card card--sold'>
          <div className="card__image"></div>
          <h2 className="card__title">Apple iPhone 15 Pro</h2>
          <div className="card__info">
            <div className="card__price">$999</div>
            <div className="card__sold-out-text">Sold Out</div>
          </div>
          <p className="card__description">
            Latest flagship smartphone with A17 Pro chip, titanium design and advanced camera system
          </p>
          <button className="card__button">Add to Cart</button>
        </div>
        
        <div className='card'>
          <div className="card__image"></div>
          <h2 className="card__title">Samsung Galaxy S24</h2>
          <div className="card__info">
            <div className="card__price">$799</div>
          </div>
          <p className="card__description">
            Powerful Android phone with AMOLED display and AI-powered camera
          </p>
          <button className="card__button">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default App