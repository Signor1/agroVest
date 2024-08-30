import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { BusinessImageRegistered } from "../generated/schema"
import { BusinessImageRegistered as BusinessImageRegisteredEvent } from "../generated/farm/farm"
import { handleBusinessImageRegistered } from "../src/farm"
import { createBusinessImageRegisteredEvent } from "./farm-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let user = Address.fromString("0x0000000000000000000000000000000000000001")
    let image = "Example string value"
    let newBusinessImageRegisteredEvent = createBusinessImageRegisteredEvent(
      user,
      image
    )
    handleBusinessImageRegistered(newBusinessImageRegisteredEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BusinessImageRegistered created and stored", () => {
    assert.entityCount("BusinessImageRegistered", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BusinessImageRegistered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "user",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "BusinessImageRegistered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "image",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
