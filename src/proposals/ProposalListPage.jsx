import React, { useEffect, useState } from 'react'

import { getProposalList, setProposalStatus } from './service'

import Loading from '../Loading'
import Page from '../Page'
import ProposalList from './ProposalList'

export const ProposalListPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [proposals, setProposals] = useState([])

  useEffect(() => {
    getProposalList().then((proposals) => {
      setIsLoading(false)
      setProposals(proposals)
    })
  }, [])

  const updateProposalStatus = async (id, status) => {
    setProposals((previousProposals) => {
      return previousProposals.map((proposal) =>
        proposal.id === id ? { ...proposal, status } : proposal
      )
    })
    await setProposalStatus(id, status)
  }

  return (
    <Page title="Call for Papers">
      {isLoading ? (
        <Loading />
      ) : (
        <ProposalList
          proposals={proposals}
          onProposalStatusUpdate={(id, status) => {
            updateProposalStatus(id, status)
          }}
        />
      )}
    </Page>
  )
}

export default ProposalListPage
