import React from 'react';
import prime from '../assets/prime.png';
import disney from '../assets/disney.png';
import sunnxt from '../assets/SunNXT.jpg'
import zee5 from '../assets/zee5.png'
import erosnow from '../assets/ErosNow.png';
import sonyliv from '../assets/sonyliv.png';
import epicon from '../assets/epicon.png';
import sheemaro from '../assets/sheemaro.png';
import voot from '../assets/voot.png';
import hungamap from '../assets/hungamap.png';

function RenderCard({data,plan}){
      return(
        <div className='card'>
          <div className='face face1'>
            <div className='content'>
              <div className='stars'></div>
                <h2 className={plan}>{data[plan]["plan-name"]}</h2>
                <h4 className={plan} style={{marginBottom:"10px"}}>{data[plan]["plan-offers"]}</h4>
                <p className={plan}>{data[plan]["plan-price"]}</p>
                <p className={plan} style={{marginTop:"10px"}}>{data[plan]["plan-details"]}</p>
            </div>
          </div>
        </div>
      );
    }

function RenderOTTCard({data,plan}){
    return(
      <div className='card'>
        <div className='face face1'>
          <div className='content'>
            <div className='stars'></div>
              <h2 className={plan}>{data[plan]["plan-name"]}</h2>
              <h4 className={plan} style={{marginBottom:"10px"}}>{data[plan]["plan-offers"]}</h4>
              <p className={plan}>{data[plan]["plan-price"]}</p>
              <p className={plan} style={{marginTop:"10px"}}>{data[plan]["plan-details"]}</p>
              <span style={{display:"flex",marginTop:"10px"}}>
                <span style={{marginRight:"2px"}}>
                  <img src={prime} alt="not found"/>
                </span>
                <span style={{marginRight:"2px"}}>
                  <img src={disney} alt="not found"/>
                </span>
                <span style={{marginRight:"4px"}}>
                  <img src={sunnxt} alt="not found" height={48} width={48}/>
                </span>
                <span style={{marginRight:"4px"}}>
                  <img src={zee5} alt="not found" height={48} width={48}/>
                </span>
                <span style={{marginRight:"4px"}}>
                  <img src={erosnow} alt="not found" height={48} width={48}/>
                </span>
              </span>
              <span style={{display:"flex",marginTop:"10px"}}>
                <span style={{marginRight:"4px"}}>
                  <img src={sonyliv} alt="not found" height={48} width={48}/>
                </span>
                <span style={{marginRight:"4px"}}>
                  <img src={epicon} alt="not found" height={48} width={48}/>
                </span>
                <span style={{marginRight:"4px"}}>
                  <img src={sheemaro} alt="not found" height={48} width={48}/>
                </span>
                <span style={{marginRight:"4px"}}>
                  <img src={voot} alt="not found" height={48} width={48}/>
                </span>
                <span style={{marginRight:"4px"}}>
                  <img src={hungamap} alt="not found" height={48} width={48}/>
                </span>
              </span>
          </div>
        </div>
      </div>
  );
}

export default function PricePack({planType,data}) {

  if(planType!=="OTT Plan"){
    return (
      <>
        <div className='flex-container'>
          <div className='pricing-month'>
          <h2>{planType}</h2>
          <hr/>
        </div>
      </div>

      <div className='pricing'>
        <div className='container'>
          <RenderCard data={data} plan="plan-1"/>
          <RenderCard data={data} plan="plan-2"/>
          <RenderCard data={data} plan="plan-3"/>
        </div>
      </div>
    </>
  )
  }
  else{
    return(
      <>
        <div className='flex-container'>
          <div className='pricing-month'>
          <h2>{planType}</h2>
          <hr/>
        </div>
      </div>

      <div className='pricing'>
        <div className='container'>
          <RenderOTTCard data={data} plan="plan-1"/>
        </div>
      </div>
    </>
    )
  }
}
