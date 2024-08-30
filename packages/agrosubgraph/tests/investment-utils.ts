import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  InvestmentWithdrawn,
  NewFarmInvestment
} from "../generated/investment/investment"

export function createInvestmentWithdrawnEvent(
  farmId: BigInt,
  withdrawerAddress: Address,
  amount: BigInt
): InvestmentWithdrawn {
  let investmentWithdrawnEvent = changetype<InvestmentWithdrawn>(newMockEvent())

  investmentWithdrawnEvent.parameters = new Array()

  investmentWithdrawnEvent.parameters.push(
    new ethereum.EventParam("farmId", ethereum.Value.fromUnsignedBigInt(farmId))
  )
  investmentWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawerAddress",
      ethereum.Value.fromAddress(withdrawerAddress)
    )
  )
  investmentWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return investmentWithdrawnEvent
}

export function createNewFarmInvestmentEvent(
  farmID: BigInt,
  investorAddress: Address,
  amount: BigInt
): NewFarmInvestment {
  let newFarmInvestmentEvent = changetype<NewFarmInvestment>(newMockEvent())

  newFarmInvestmentEvent.parameters = new Array()

  newFarmInvestmentEvent.parameters.push(
    new ethereum.EventParam("farmID", ethereum.Value.fromUnsignedBigInt(farmID))
  )
  newFarmInvestmentEvent.parameters.push(
    new ethereum.EventParam(
      "investorAddress",
      ethereum.Value.fromAddress(investorAddress)
    )
  )
  newFarmInvestmentEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return newFarmInvestmentEvent
}
