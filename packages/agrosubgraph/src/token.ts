import {
  Approval as ApprovalEvent,
  TokenLocked as TokenLockedEvent,
  TokenUnlocked as TokenUnlockedEvent,
  Transfer as TransferEvent
} from "../generated/Token/Token"
import {
  Approval,
  TokenLocked,
  TokenUnlocked,
  Transfer
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenLocked(event: TokenLockedEvent): void {
  let entity = new TokenLocked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._amount = event.params._amount
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenUnlocked(event: TokenUnlockedEvent): void {
  let entity = new TokenUnlocked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._amount = event.params._amount
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
