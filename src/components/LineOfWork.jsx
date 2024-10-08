import React from 'react'
import { Constants, ImageImports } from '../constants/Constants'
import { Tilt } from 'react-tilt'
import ScrReSizeHandler from './Helper/ScrReSizeHandler'

const LineOfWork = () => {
    const { width, height } = ScrReSizeHandler()
    return (
        <div id='SectionSpacing'>
            <div id='AboutTitle'>
                <div>
                    <h3 id='SectionTitle'>Line of work</h3>
                    <h4 id='SubTitle'>Stream of professional dedication</h4>
                </div>
                <img id='TopIcon' src={ImageImports.workIcon} alt="work" />
            </div>
            <div id='WorkCards'>
                {Constants.LineOfWork.map((card, index) => {
                    return <div key={index} id='customWidth'>
                    <Tilt options={{ max: 10, speed: 200, perspective: 1000 , scale:1 }}>
                        <div id='WorkCard' className='glow-on-hover'>
                            <div id='WorkCardTop'>
                                <img style={{ width: width > 600 ? card.width : card.Phonewidth, height:width > 600 ? card.height : card.Phoneheight }} src={card.CompanyIcon} alt="icon" />
                                <h5>{card.Date}</h5>
                            </div>
                            <div id='WorkCardBottom'>
                                <h4>{card.Position}</h4>
                                <h6>{card.Info}</h6>
                            </div>
                        </div>
                        </Tilt>
                    </div>
                })}
            </div>
        </div>
    )
}

export default LineOfWork
