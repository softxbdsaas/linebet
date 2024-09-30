import { authKey } from '@/constants/authKey';
import { getCookie } from '@/utils/cookies-info';
import React from 'react'

const page = () => {
    const cokkid = getCookie(authKey);
    console.log(cokkid)
  return (
    <div>
      
    </div>
  )
}

export default page
