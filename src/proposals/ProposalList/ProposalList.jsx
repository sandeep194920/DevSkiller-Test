import React from 'react'
import { Link } from 'react-router-dom'

import ProposalRow from '../ProposalRow'

import './ProposalList.css'

const ProposalList = ({ proposals, onStatusUpdate }) => (
  <ul data-testid="proposal-list" className="ProposalList">
    {proposals.map((proposal) => (
      <li key={proposal.id} className="ProposalList__item">
        <Link
          key={proposal.id}
          className="ProposalList__item__link"
          to={`/proposals`}
        >
          <ProposalRow
            proposal={proposal}
            onStatusUpdate={(id, status) => {
              onStatusUpdate(id, status)
            }}
          />
        </Link>
      </li>
    ))}
  </ul>
)

export default ProposalList
