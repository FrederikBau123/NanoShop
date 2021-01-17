import soultrader from './soultrader.jpg';
import landro from './landros.jpg'
import book from './book.jpg'
import dragon from './dragonkite.jpg'
import fish from './fish.jpg'
import grell from './grell.jpg'
import legioneye from './evileye.jpg'
import nightsaber from './jungletiger.jpg'
import nano from './Nano.png'
import inventory from './Capture.PNG'
import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div class="everything">


      <div class="MenuBar">

        <div class="aboutInfo">
           ABOUT US
        </div>

        <div class="titleBox">
          <img class="nanoLogo" src={nano} />
          <div class="Title">
            <div class="TitleText">
              World of Warcraft
            </div>
            <div class="TitleText">
              NANO Shop
            </div>
          </div>
            <img class="nanoLogo" src={nano} />
        </div>

        <div class="contactInfo">
           CONTACT US
        </div>

      </div>


      <div class="allItems">

        <div class="items ">
          <div class="product">
            <a href="https://www.wowhead.com/item=38050/soul-trader-beacon" target="_blank">
              <img class="imgitem" src={soultrader} />
            </a>
          </div>
          <div class="itemInfo">
            <div class="itemName">Soul-Trader Beacon</div>
            <div class="itemLevel">Item Level 1</div>
            <div class="itemBinds">Binds when picked up</div>
            <div class="itemUnique">Unique</div>
            <div class="itemUse">Use: Teaches you how to summon this companion.</div>
          </div>
          <div class="payment">
            <div class="priceText"> $100</div>
            <a class="buy1" href="https://nowpayments.io/payment/?iid=5185635713" target="_blank"> Pay with NANO</a>
          </div>
        </div>

        <div class="items ">
          <div class="product">
            <a href="https://www.wowhead.com/item=34493/dragon-kite" target="_blank">
              <img class="imgitem" src={dragon} />
            </a>
          </div>
          <div class="itemInfo">
            <div class="itemName">Dragon Kite</div>
            <div class="itemLevel">Item Level 1</div>
            <div class="itemBinds">Binds when picked up</div>
            <div class="itemUnique">Unique</div>
            <div class="itemUse">Use: Teaches you how to summon this companion.</div>
          </div>
          <div class="payment">
            <div class="priceText"> $75 </div>
            <a class="buy1" href="https://nowpayments.io/payment/?iid=5914552463" target="_blank"> Pay with NANO</a>
          </div>
        </div>


        <div class="items ">
          <div class="product">
            <a href="https://www.wowhead.com/item=68841/nightsaber-cub" target="_blank">
              <img class="imgitem" src={nightsaber} />
            </a>
          </div>
          <div class="itemInfo">
            <div class="itemName">Nightsaber Cub</div>
            <div class="itemLevel">Item Level 1</div>
            <div class="itemBinds">Binds when picked up</div>
            <div class="itemUnique">Unique</div>
            <div class="itemUse">Use: Teaches you how to summon this companion.</div>
          </div>
          <div class="payment">
            <div class="priceText"> $25 </div>
            <a class="buy1" href="https://nowpayments.io/payment/?iid=4512806064" target="_blank"> Pay with NANO</a>
          </div>
        </div>

        <div class="items ">
          <div class="product">
            <a href="https://www.wowhead.com/item=68840/landros-lichling" target="_blank">
              <img class="imgitem" src={landro}  />
            </a>
          </div>
          <div class="itemInfo">
            <div class="itemName">Landro's Lichling</div>
            <div class="itemLevel">Item Level 1</div>
            <div class="itemBinds">Binds when picked up</div>
            <div class="itemUnique">Unique</div>
            <div class="itemUse">Use: Teaches you how to summon this companion.</div>
          </div>
          <div class="payment">
            <div class="priceText"> $25 </div>
            <a class="buy1" href="https://nowpayments.io/payment/?iid=5508490419" target="_blank"> Pay with NANO</a>
          </div>
        </div>

        <div class="items ">
          <div class="product">
            <a href="https://www.wowhead.com/item=93669/gusting-grimoire" target="_blank">
              <img class="imgitem"src={book}  />
            </a>
          </div>
          <div class="itemInfo">
            <div class="itemName">Gusting Grimoire</div>
            <div class="itemLevel">Item Level 1</div>
            <div class="itemBinds">Binds when picked up</div>
            <div class="itemUnique">Unique</div>
            <div class="itemUse">Use: Teaches you how to summon this companion.</div>
          </div>
          <div class="payment">
            <div class="priceText"> $15 </div>
            <a class="buy1" href="https://nowpayments.io/payment/?iid=5232693282" target="_blank"> Pay with NANO</a>
          </div>
        </div>

        <div class="items ">
          <div class="product">
            <a href="https://www.wowhead.com/item=71624/purple-puffer" target="_blank">
              <img class="imgitem" src={fish}/>
            </a>
          </div>
          <div class="itemInfo">
            <div class="itemName">Purple Puffer</div>
            <div class="itemLevel">Item Level 1</div>
            <div class="itemBinds">Binds when picked up</div>
            <div class="itemUnique">Unique</div>
            <div class="itemUse">Use: Teaches you how to summon this companion.</div>
          </div>
          <div class="payment">
            <div class="priceText"> $20 </div>
            <a class="buy1" href="https://nowpayments.io/payment/?iid=5035448460" target="_blank"> Pay with NANO</a>
          </div>
        </div>

        <div class="items ">
          <div class="product">
            <a href="https://www.wowhead.com/item=79744/eye-of-the-legion" target="_blank">
              <img class="imgitem" src={legioneye} />
            </a>
          </div>
          <div class="itemInfo">
            <div class="itemName">Eye of the Legion</div>
            <div class="itemLevel">Item Level 1</div>
            <div class="itemBinds">Binds when picked up</div>
            <div class="itemUnique">Unique</div>
            <div class="itemUse">Use: Teaches you how to summon this companion.</div>
          </div>
          <div class="payment">
            <div class="priceText"> $20 </div>
            <a class="buy1" href="https://nowpayments.io/payment/?iid=6415305870" target="_blank"> Pay with NANO</a>
          </div>
        </div>

        <div class="items ">
          <div class="product">
            <a href="https://www.wowhead.com/item=72134/grell-moss" target="_blank">
              <img class="imgitem" src={grell} />
            </a>
          </div>
          <div class="itemInfo">
            <div class="itemName">Grell Moss</div>
            <div class="itemLevel">Item Level 1</div>
            <div class="itemBinds">Binds when picked up</div>
            <div class="itemUnique">Unique</div>
            <div class="itemUse">Use: Teaches you how to summon this companion.</div>
          </div>
          <div class="payment">
            <div class="priceText"> $20 </div>
            <a class="buy1" href="https://nowpayments.io/payment/?iid=5114408936" target="_blank"> Pay with NANO</a>
          </div>
        </div>

    </div>


    </div>
  );
}

export default App;
