import DepositRecord from '@/components/accountCommonLayout/TransactionHistory/depositRecord/DepositRecord'
import React from 'react'

const page = ({params}) => {
  return (
    <>
      <DepositRecord id={params?.id}/> 
    </>
  )
}

export default page
