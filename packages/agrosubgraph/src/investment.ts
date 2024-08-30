import {
  InvestmentWithdrawn as InvestmentWithdrawnEvent,
  NewFarmInvestment as NewFarmInvestmentEvent,
} from "../generated/investment/investment"
import { InvestmentWithdrawn, NewFarmInvestment } from "../generated/schema"

export function handleInvestmentWithdrawn(
  event: InvestmentWithdrawnEvent,
): void {
  let entity = new InvestmentWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.farmId = event.params.farmId
  entity.withdrawerAddress = event.params.withdrawerAddress
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewFarmInvestment(event: NewFarmInvestmentEvent): void {
  let entity = new NewFarmInvestment(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.farmID = event.params.farmID
  entity.investorAddress = event.params.investorAddress
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
