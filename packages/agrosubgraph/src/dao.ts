import {
  ChallengeCreated as ChallengeCreatedEvent,
  ChallengeResolved as ChallengeResolvedEvent,
  Delegated as DelegatedEvent,
  DisputeInitiated as DisputeInitiatedEvent,
  DisputeResolved as DisputeResolvedEvent,
  NewInvestmentAddedToList as NewInvestmentAddedToListEvent,
  NewProposal as NewProposalEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  ProposalExecuted as ProposalExecutedEvent,
  ProposalTimeUpdated as ProposalTimeUpdatedEvent,
  Undelegated as UndelegatedEvent,
  Voted as VotedEvent,
  VotesTallied as VotesTalliedEvent,
} from "../generated/DAO/DAO"
import {
  ChallengeCreated,
  ChallengeResolved,
  Delegated,
  DisputeInitiated,
  DisputeResolved,
  NewInvestmentAddedToList,
  NewProposal,
  OwnershipTransferred,
  ProposalExecuted,
  ProposalTimeUpdated,
  Undelegated,
  Voted,
  VotesTallied,
} from "../generated/schema"

export function handleChallengeCreated(event: ChallengeCreatedEvent): void {
  let entity = new ChallengeCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.challengeIdCreated = event.params.challengeIdCreated
  entity.proposalId = event.params.proposalId
  entity.challenger = event.params.challenger

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleChallengeResolved(event: ChallengeResolvedEvent): void {
  let entity = new ChallengeResolved(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.challengeIdResolved = event.params.challengeIdResolved
  entity.valid = event.params.valid

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDelegated(event: DelegatedEvent): void {
  let entity = new Delegated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.delegatorAddress = event.params.delegatorAddress
  entity.delegatee = event.params.delegatee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDisputeInitiated(event: DisputeInitiatedEvent): void {
  let entity = new DisputeInitiated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.disputeInitiatedId = event.params.disputeInitiatedId
  entity.challengeId = event.params.challengeId
  entity.arbitrator = event.params.arbitrator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDisputeResolved(event: DisputeResolvedEvent): void {
  let entity = new DisputeResolved(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.disputeResolvedId = event.params.disputeResolvedId
  entity.ruling = event.params.ruling

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewInvestmentAddedToList(
  event: NewInvestmentAddedToListEvent,
): void {
  let entity = new NewInvestmentAddedToList(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.NewIdAdded = event.params.NewIdAdded
  entity.Address = event.params.Address

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewProposal(event: NewProposalEvent): void {
  let entity = new NewProposal(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.userId = event.params.userId
  entity.Title = event.params.Title
  entity.Proposer = event.params.Proposer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent,
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProposalExecuted(event: ProposalExecutedEvent): void {
  let entity = new ProposalExecuted(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.ProposalId = event.params.ProposalId
  entity.FarmId = event.params.FarmId
  entity.Proposer = event.params.Proposer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProposalTimeUpdated(
  event: ProposalTimeUpdatedEvent,
): void {
  let entity = new ProposalTimeUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.ProposalId = event.params.ProposalId
  entity.NewTime = event.params.NewTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUndelegated(event: UndelegatedEvent): void {
  let entity = new Undelegated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.unDelegator = event.params.unDelegator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVoted(event: VotedEvent): void {
  let entity = new Voted(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.voter = event.params.voter
  entity.proposalId = event.params.proposalId
  entity.votingPower = event.params.votingPower

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVotesTallied(event: VotesTalliedEvent): void {
  let entity = new VotesTallied(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.proposalIdTallyVote = event.params.proposalIdTallyVote
  entity.totalVotingPower = event.params.totalVotingPower

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
