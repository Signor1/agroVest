import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { ChallengeCreated } from "../generated/schema"
import { ChallengeCreated as ChallengeCreatedEvent } from "../generated/DAO/DAO"
import { handleChallengeCreated } from "../src/dao"
import { createChallengeCreatedEvent } from "./dao-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let challengeIdCreated = BigInt.fromI32(234)
    let proposalId = BigInt.fromI32(234)
    let challenger = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newChallengeCreatedEvent = createChallengeCreatedEvent(
      challengeIdCreated,
      proposalId,
      challenger
    )
    handleChallengeCreated(newChallengeCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ChallengeCreated created and stored", () => {
    assert.entityCount("ChallengeCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ChallengeCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "challengeIdCreated",
      "234"
    )
    assert.fieldEquals(
      "ChallengeCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "proposalId",
      "234"
    )
    assert.fieldEquals(
      "ChallengeCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "challenger",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
