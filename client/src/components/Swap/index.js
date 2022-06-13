import { useState } from "react";
import React from "react";
import {getIcon} from "img/svgFinder";
import './styles.sass'
import LoopingContent from "../common/LoopingContent";


const IndexPage = () => {
  const [swapForm, setSwapForm] = useState({amount: '', from: '', to: ''})
  const [from, setFrom] = useState({name: 'avax', img: 'avax.svg'})
  const [to, setTo] = useState({name: 'btc', img: 'btc.svg'})
  console.log('================')
  return (
    <div className="swap-component">
      <div className="diagram-block">
        <div className="swap-pair">
          <div className="from-token">
            <img className="from-token-img token" src={getIcon(`token.${from.name}`)} alt={from.name}/>
            <div>{from.name}</div>
          </div>
          <div className="to-token">
            <img className="token" src={getIcon(`token.${to.name}`)} alt={to.name}/>
            <div>{to.name}</div>
          </div>
        </div>
        <div className="diagram">

        </div>
      </div>
      <div className="swap-block">
        <div>Swap</div>
        <div className="token-row from-row">
          <div className="top-of-row">
            <div>From</div>
            <div>Balance : 1</div>
          </div>
          <div className="token-main-row">
            <input className="amount-input" name="amount" type="number" placeholder="0" value="0" onChange={() => {}} />
            <div>|</div>
            <div className="token-div" onClick={() => {}}>
              <img className="token" src={getIcon(`token.${from.name}`)} alt={from.name}/>
              <div>
                {from.name}
              </div>
            </div>
          </div>
        </div>
        <LoopingContent>
          Swap !
        </LoopingContent>
        <div className="token-row to-row">
          <div className="top-of-row">
            <div>To (estimated)</div>
            <div>Balance : 1</div>
          </div>
          <div className="token-main-row">
            <input className="amount-input" name="amount" type="number" placeholder="0" value="0" onChange={() => {}} />
            <div>|</div>
            <div className="token-div" onClick={() => {}}>
              <img className="token" src={getIcon(`token.${to.name}`)}  alt={to.name}/>
              <div>
                {to.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage;
