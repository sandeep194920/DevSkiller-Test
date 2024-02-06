import React from 'react'

import DetailsSection from '../DetailsSection'

import './ProposalDetails.css'

const ProposalDetails = ({ talk }) => {
  const { speaker, description } = talk
  console.log('THE SPEAKER FROM TEST IS', speaker)
  console.log('THE desc FROM TEST IS', description)
  console.log('THE TALK FROM TEST IS', talk)
  return (
    <div data-testid="proposal-details" className="ProposalDetails">
      <DetailsSection className="ProposalDetails__speaker" name="speaker">
        <span className="ProposalDetails__speaker__value">{speaker}</span>
      </DetailsSection>

      <DetailsSection className="ProposalDetails__category" name="category" />
      <DetailsSection
        className="ProposalDetails__description"
        name="description"
      >
        <div className="ProposalDetails__description__value">{description}</div>
      </DetailsSection>
    </div>
  )
}

export default ProposalDetails
