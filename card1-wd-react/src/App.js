import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Card />
    </div>
  );
}
function Card(){
  return (
      <div className="price-container">
        <div className="price-card">
          <h6>FREE</h6>
          <p className="price">$0/month</p>
          <ul className="features">
            <li>✔️Single User</li>
            <li>✔️50GB Storage</li>
            <li>✔️Unlimited Public Projects</li>
            <li>✔️Community Access</li>
            <li class="list">✖️Unlimited Private Projects</li>
            <li class="list">✖️Dedicated Phone Support</li>
            <li class="list">✖️Free Subdomain</li>
            <li class="list">✖️Monthly Status Reports</li>
          </ul>
          <button className="buy-button">BUTTON</button>
        </div>
        <div className="price-card">
          <h6>PLUS</h6>
          <p className="price">$9/month</p>
          <ul className="features">
            <li>✔️Single User</li>
            <li>✔️50GB Storage</li>
            <li>✔️Unlimited Public Projects</li>
            <li>✔️Community Access</li>
            <li>✔️Unlimited Private Projects</li>
            <li>✔️Dedicated Phone Support</li>
            <li>✔️Free Subdomain</li>
            <li class="list">✖️Monthly Status Reports</li>
          </ul>
          <button className="buy-button">BUTTON</button>
        </div>
        <div className="price-card">
          <h6>PRO</h6>
          <p className="price">$49/month</p>
          <ul className="features">
            <li>✔️Single User</li>
            <li>✔️50GB Storage</li>
            <li>✔️Unlimited Public Projects</li>
            <li>✔️Community Access</li>
            <li>✔️Unlimited Private Projects</li>
            <li>✔️Dedicated Phone Support</li>
            <li>✔️Free Subdomain</li>
            <li>✔️Monthly Status Reports</li>
          </ul>
          <button className="buy-button">BUTTON</button>
        </div>
      </div>
  );
}
export default App;
