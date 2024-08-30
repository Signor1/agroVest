import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
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
  VotesTallied
} from "../generated/DAO/DAO"

export function createChallengeCreatedEvent(
  challengeIdCreated: BigInt,
  proposalId: BigInt,
  challenger: Address
): ChallengeCreated {
  let challengeCreatedEvent = changetype<ChallengeCreated>(newMockEvent())

  challengeCreatedEvent.parameters = new Array()

  challengeCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "challengeIdCreated",
      ethereum.Value.fromUnsignedBigInt(challengeIdCreated)
    )
  )
  challengeCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  challengeCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "challenger",
      ethereum.Value.fromAddress(challenger)
    )
  )

  return challengeCreatedEvent
}

export function createChallengeResolvedEvent(
  challengeIdResolved: BigInt,
  valid: boolean
): ChallengeResolved {
  let challengeResolvedEvent = changetype<ChallengeResolved>(newMockEvent())

  challengeResolvedEvent.parameters = new Array()

  challengeResolvedEvent.parameters.push(
    new ethereum.EventParam(
      "challengeIdResolved",
      ethereum.Value.fromUnsignedBigInt(challengeIdResolved)
    )
  )
  challengeResolvedEvent.parameters.push(
    new ethereum.EventParam("valid", ethereum.Value.fromBoolean(valid))
  )

  return challengeResolvedEvent
}

export function createDelegatedEvent(
  delegatorAddress: Address,
  delegatee: Address
): Delegated {
  let delegatedEvent = changetype<Delegated>(newMockEvent())

  delegatedEvent.parameters = new Array()

  delegatedEvent.parameters.push(
    new ethereum.EventParam(
      "delegatorAddress",
      ethereum.Value.fromAddress(delegatorAddress)
    )
  )
  delegatedEvent.parameters.push(
    new ethereum.EventParam("delegatee", ethereum.Value.fromAddress(delegatee))
  )

  return delegatedEvent
}

export function createDisputeInitiatedEvent(
  disputeInitiatedId: BigInt,
  challengeId: BigInt,
  arbitrator: Address
): DisputeInitiated {
  let disputeInitiatedEvent = changetype<DisputeInitiated>(newMockEvent())

  disputeInitiatedEvent.parameters = new Array()

  disputeInitiatedEvent.parameters.push(
    new ethereum.EventParam(
      "disputeInitiatedId",
      ethereum.Value.fromUnsignedBigInt(disputeInitiatedId)
    )
  )
  disputeInitiatedEvent.parameters.push(
    new ethereum.EventParam(
      "challengeId",
      ethereum.Value.fromUnsignedBigInt(challengeId)
    )
  )
  disputeInitiatedEvent.parameters.push(
    new ethereum.EventParam(
      "arbitrator",
      ethereum.Value.fromAddress(arbitrator)
    )
  )

  return disputeInitiatedEvent
}

export function createDisputeResolvedEvent(
  disputeResolvedId: BigInt,
  ruling: boolean
): DisputeResolved {
  let disputeResolvedEvent = changetype<DisputeResolved>(newMockEvent())

  disputeResolvedEvent.parameters = new Array()

  disputeResolvedEvent.parameters.push(
    new ethereum.EventParam(
      "disputeResolvedId",
      ethereum.Value.fromUnsignedBigInt(disputeResolvedId)
    )
  )
  disputeResolvedEvent.parameters.push(
    new ethereum.EventParam("ruling", ethereum.Value.fromBoolean(ruling))
  )

  return disputeResolvedEvent
}

export function createNewInvestmentAddedToListEvent(
  NewIdAdded: BigInt,
  Address: Address
): NewInvestmentAddedToList {
  let newInvestmentAddedToListEvent = changetype<NewInvestmentAddedToList>(
    newMockEvent()
  )

  newInvestmentAddedToListEvent.parameters = new Array()

  newInvestmentAddedToListEvent.parameters.push(
    new ethereum.EventParam(
      "NewIdAdded",
      ethereum.Value.fromUnsignedBigInt(NewIdAdded)
    )
  )
  newInvestmentAddedToListEvent.parameters.push(
    new ethereum.EventParam("Address", ethereum.Value.fromAddress(Address))
  )

  return newInvestmentAddedToListEvent
}

export function createNewProposalEvent(
  userId: BigInt,
  Title: string,
  Proposer: Address
): NewProposal {
  let newProposalEvent = changetype<NewProposal>(newMockEvent())

  newProposalEvent.parameters = new Array()

  newProposalEvent.parameters.push(
    new ethereum.EventParam("userId", ethereum.Value.fromUnsignedBigInt(userId))
  )
  newProposalEvent.parameters.push(
    new ethereum.EventParam("Title", ethereum.Value.fromString(Title))
  )
  newProposalEvent.parameters.push(
    new ethereum.EventParam("Proposer", ethereum.Value.fromAddress(Proposer))
  )

  return newProposalEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createProposalExecutedEvent(
  ProposalId: BigInt,
  FarmId: BigInt,
  Proposer: Address
): ProposalExecuted {
  let proposalExecutedEvent = changetype<ProposalExecuted>(newMockEvent())

  proposalExecutedEvent.parameters = new Array()

  proposalExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "ProposalId",
      ethereum.Value.fromUnsignedBigInt(ProposalId)
    )
  )
  proposalExecutedEvent.parameters.push(
    new ethereum.EventParam("FarmId", ethereum.Value.fromUnsignedBigInt(FarmId))
  )
  proposalExecutedEvent.parameters.push(
    new ethereum.EventParam("Proposer", ethereum.Value.fromAddress(Proposer))
  )

  return proposalExecutedEvent
}

export function createProposalTimeUpdatedEvent(
  ProposalId: BigInt,
  NewTime: BigInt
): ProposalTimeUpdated {
  let proposalTimeUpdatedEvent = changetype<ProposalTimeUpdated>(newMockEvent())

  proposalTimeUpdatedEvent.parameters = new Array()

  proposalTimeUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "ProposalId",
      ethereum.Value.fromUnsignedBigInt(ProposalId)
    )
  )
  proposalTimeUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "NewTime",
      ethereum.Value.fromUnsignedBigInt(NewTime)
    )
  )

  return proposalTimeUpdatedEvent
}

export function createUndelegatedEvent(unDelegator: Address): Undelegated {
  let undelegatedEvent = changetype<Undelegated>(newMockEvent())

  undelegatedEvent.parameters = new Array()

  undelegatedEvent.parameters.push(
    new ethereum.EventParam(
      "unDelegator",
      ethereum.Value.fromAddress(unDelegator)
    )
  )

  return undelegatedEvent
}

export function createVotedEvent(
  voter: Address,
  proposalId: BigInt,
  votingPower: BigInt
): Voted {
  let votedEvent = changetype<Voted>(newMockEvent())

  votedEvent.parameters = new Array()

  votedEvent.parameters.push(
    new ethereum.EventParam("voter", ethereum.Value.fromAddress(voter))
  )
  votedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  votedEvent.parameters.push(
    new ethereum.EventParam(
      "votingPower",
      ethereum.Value.fromUnsignedBigInt(votingPower)
    )
  )

  return votedEvent
}

export function createVotesTalliedEvent(
  proposalIdTallyVote: BigInt,
  totalVotingPower: BigInt
): VotesTallied {
  let votesTalliedEvent = changetype<VotesTallied>(newMockEvent())

  votesTalliedEvent.parameters = new Array()

  votesTalliedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalIdTallyVote",
      ethereum.Value.fromUnsignedBigInt(proposalIdTallyVote)
    )
  )
  votesTalliedEvent.parameters.push(
    new ethereum.EventParam(
      "totalVotingPower",
      ethereum.Value.fromUnsignedBigInt(totalVotingPower)
    )
  )

  return votesTalliedEvent
}
