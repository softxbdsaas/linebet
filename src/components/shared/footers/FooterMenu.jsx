import React from 'react'
import FooterItems from './FooterItems'
import { footerData } from '../../../../public/database/footerDB'

const FooterMenu = () => {
  return (
    <div className=' grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5  xl:grid-cols-6  gap-3 bg-primary-base my-2 p-4 rounded'> 
        <div>
            <FooterItems title={"Information"} data={footerData?.Information} />
        </div>
        <div>
            <FooterItems title={"Betting"} data={footerData?.Betting} />
        </div>
        <div>
            <FooterItems title={"Games"} data={footerData?.Games} />
        </div>
        <div>
            <FooterItems title={"Statistics"} data={footerData?.Statistics} />
        </div>
        <div>
            <FooterItems title={"UsefulLinks"} data={footerData?.UsefulLinks} />
        </div>

        <div>
            <FooterItems title={"Apps"} data={footerData?.Apps} />
        </div>
    </div>
  )
}

export default FooterMenu
