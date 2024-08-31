import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { InvestmentWithdrawn } from "../generated/schema"
import { InvestmentWithdrawn as InvestmentWithdrawnEvent } from "../generated/investment/investment"
import { handleInvestmentWithdrawn } from "../src/investment"
import { createInvestmentWithdrawnEvent } from "./investment-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let farmId = BigInt.fromI32(234)
    let withdrawerAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let amount = BigInt.fromI32(234)
    let newInvestmentWithdrawnEvent = createInvestmentWithdrawnEvent(
      farmId,
      withdrawerAddress,
      amount
    )
    handleInvestmentWithdrawn(newInvestmentWithdrawnEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("InvestmentWithdrawn created and stored", () => {
    assert.entityCount("InvestmentWithdrawn", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "InvestmentWithdrawn",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "farmId",
      "234"
    )
    assert.fieldEquals(
      "InvestmentWithdrawn",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "withdrawerAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "InvestmentWithdrawn",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
