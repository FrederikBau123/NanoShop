import soultrader from './Soultrader.png';
import landro from './Landro.png'
import book from './Book.png'
import dragon from './DragonKite.png'
import fish from './Fish.png'
import grell from './Grell.png'
import legioneye from './LegionEye.png'
import nightsaber from './Nightsaber.png'
import nano from './Nano.png'
import './App.css';

function App() {
  return (
    <div class="everything">
      <div>
        <div class="abs">
        <img class="nanoimg1"src={nano} width="64" height="32" />
        </div>
        <p>
          World of Warcraft
        </p>
        <p>
          NANO Shop
        </p>
        <div class="abs">
        <img class="nanoimg2"src={nano} width="64" height="32" />
        </div>
      </div>
      <div class="items background1">
        <a href="https://www.wowhead.com/item=38050/soul-trader-beacon" target="_blank">
          <img class="imgitem" src={soultrader} width="308" height="95"/>
        </a>
        <h1 class="stockText fixEthereal1">1 LEFT IN STOCK</h1>
        <h2 class="priceText fixEthereal2"> PRICE: $100</h2>
        <a class="buy1" href="https://nowpayments.io/payment/?iid=5185635713" target="_blank"> Pay with NANO</a>
      </div>
      <div class="items background2">
        <a href="https://www.wowhead.com/item=34493/dragon-kite" target="_blank">
          <img class="imgitem" src={dragon} width="300" height="90" />
        </a>
        <h1 class="stockText">1 LEFT IN STOCK</h1>
        <h2 class="priceText"> PRICE: $75 </h2>
        <a class="buy2" href="https://nowpayments.io/payment/?iid=5914552463" target="_blank"> Pay with NANO</a>
      </div>
      <div class="items background1">
        <a href="https://www.wowhead.com/item=68841/nightsaber-cub" target="_blank">
          <img class="imgitem" src={nightsaber} width="300" height="90" />
        </a>
        <h1 class="stockText">2 LEFT IN STOCK</h1>
        <h2 class="priceText"> PRICE: $25 </h2>
        <a class="buy1" href="https://nowpayments.io/payment/?iid=4512806064" target="_blank"> Pay with NANO</a>
      </div>
      <div class="items background2">
        <a href="https://www.wowhead.com/item=68840/landros-lichling" target="_blank">
          <img class="imgitem" src={landro} width="300" height="90" />
        </a>
        <h1 class="stockText">3 LEFT IN STOCK</h1>
        <h2 class="priceText"> PRICE: $25 </h2>
        <a class="buy2" href="https://nowpayments.io/payment/?iid=5508490419" target="_blank"> Pay with NANO</a>
      </div>
      <div class="items background1">
        <a href="https://www.wowhead.com/item=93669/gusting-grimoire" target="_blank">
          <img class="imgitem"src={book} width="300" height="90" />
        </a>
        <h1 class="stockText">3 LEFT IN STOCK</h1>
        <h2 class="priceText"> PRICE: $15 </h2>
        <a class="buy1" href="https://nowpayments.io/payment/?iid=5232693282" target="_blank"> Pay with NANO</a>
      </div>
      <div class="items background2">
        <a href="https://www.wowhead.com/item=71624/purple-puffer" target="_blank">
          <img class="imgitem" src={fish} width="300" height="90" />
        </a>
        <h1 class="stockText">1 LEFT IN STOCK</h1>
        <h2 class="priceText"> PRICE: $20 </h2>
        <a class="buy2" href="https://nowpayments.io/payment/?iid=5035448460" target="_blank"> Pay with NANO</a>
      </div>
      <div class="items background1">
        <a href="https://www.wowhead.com/item=79744/eye-of-the-legion" target="_blank">
          <img class="imgitem" src={legioneye} width="300" height="90" />
        </a>
        <h1 class="stockText">1 LEFT IN STOCK</h1>
        <h2 class="priceText"> PRICE: $20 </h2>
        <a class="buy1" href="https://nowpayments.io/payment/?iid=6415305870" target="_blank"> Pay with NANO</a>
      </div>
      <div class="items background2">
        <a href="https://www.wowhead.com/item=72134/grell-moss" target="_blank">
          <img class="imgitem" src={grell} width="300" height="90" />
        </a>
        <h1 class="stockText">1 LEFT IN STOCK</h1>
        <h2 class="priceText"> PRICE: $20 </h2>
        <a class="buy2" href="https://nowpayments.io/payment/?iid=5114408936" target="_blank"> Pay with NANO</a>
      </div>
    </div>
  );
}

export default App;
