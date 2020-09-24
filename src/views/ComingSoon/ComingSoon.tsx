import React from 'react'
import chef from '../../assets/img/chef.png'

import PageHeader from '../../components/PageHeader'
const ComingSoon: React.FC = () => {

  return (
    <>
      <PageHeader
        icon={<img src={chef} height="120" alt="sashimi" />}
        title='Sashimi Swap Coming Soon!'
      />
    </>
  )
}

export default ComingSoon
