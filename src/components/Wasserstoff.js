
import React from 'react'
import InformerIcon from "../images/Informer_Icon.png"
import InformerIcon1 from "../images/Informer_Icon1.png"
import InformerIcon2 from "../images/Informer_Icon2.png"
export default function Wasserstoff() {
  return (
    <>
      <div className="main">
        <div className="wstf-logo1">
          <div className="Group">
            <div className="Vector"></div>
            <div className="Vector1"></div>
          </div>

        </div>
        <div className="NaviagtionBar">
          <div className="Logo">
            <div className="Name">
              WASSERSTOFF
            </div>
          </div>
          <div className="Option">
            <div className='opIcon'></div>
          </div>
          <div className="Profile">
            <div className="prIcon"></div>
          </div>
          <div className="Menu">
            <div className='Statistics'>
              Statistics
            </div>
            <div className='Overview'>
              Overview
            </div>
            <div className='Dashboard'>
              Dashboard
            </div>
            <div className='Analytics'>
              Analytics
            </div>
          </div>
          <div className="Search">
            <input type="text" />
            <div className='sericon'>

            </div>
            <div className='ipser'></div>
          </div>
        </div>
        <div className="WorldHexaMap">
          <div className="whmt">
            WSTF FRONT- END HACKATHON
          </div>
          <div className="whmtitle">
            <div className="titlename">
              All Users
            </div>
            <div className="titledetail">
              Detail{' >'}
              
            </div>
          </div>
        </div>
        <div className="Amount">
          2,431,340
        </div>
        <div className="SideIndicators">
          <div className='Informer'>
            <div className='InformerIcon'>
              <div className='Eye'></div>
              <div className='Crown'></div>
              <div className='Server'></div>
              <div className='Activity'>
                <img src={InformerIcon} />
              </div>
              <div className='UserVIP'></div>
              <div className='Users'></div>
              <div className='Chart'></div>
              <div className='Pie'></div>
              <div className='Favorite'></div>
              <div className='Wave'></div>
              <div className='BrokenWave'></div>
            </div>
            <div className='InformerInfo'>
              <div className='inftitle'>Total Earning</div>
              <div className='infamount'>
                <div className='Value'>540,549</div>
              </div>
            </div>
          </div>
          <div className="Informer1">
            <div className='InformerIcon1'>
              <div className='Activity1'>
                <img src={InformerIcon1} />
              </div>
            </div>
            <div className='InformerInfo1'>
            <div className='inftitle1'>Sales</div>
            <div className='infamount1'>
              <div className='Value1'>1,205,677</div>
            </div>
          </div>
          </div>
          <div className="Informer2">
            <div className='InformerIcon1'>
              <div className='Activity1'>
                <img src={InformerIcon2} />
              </div>
            </div>
            <div className='InformerInfo1'>
            <div className='inftitle1'>Purchase</div>
            <div className='infamount1'>
              <div className='Value1'>48,430,039</div>
            </div>
          </div>
          </div>
        </div>
        <div className = "Widget1">
          <div className="Chart1">
            <div className="Progress1"></div>
            <div className="ChartBackground1"></div>
            <div className="ChartWtitle1">67%</div>
          </div>
        </div>
      </div>
    </>
  )
}

