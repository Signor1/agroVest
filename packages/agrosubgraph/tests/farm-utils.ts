import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  BusinessImageRegistered,
  BusinessImageUpdated,
  BusinessNameRegistered,
  BusinessNameUpdated,
  EscrowCreated,
  ProductAdded,
  ProductReviewed,
  ProductUpdated
} from "../generated/farm/farm"

export function createBusinessImageRegisteredEvent(
  user: Address,
  image: string
): BusinessImageRegistered {
  let businessImageRegisteredEvent = changetype<BusinessImageRegistered>(
    newMockEvent()
  )

  businessImageRegisteredEvent.parameters = new Array()

  businessImageRegisteredEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  businessImageRegisteredEvent.parameters.push(
    new ethereum.EventParam("image", ethereum.Value.fromString(image))
  )

  return businessImageRegisteredEvent
}

export function createBusinessImageUpdatedEvent(
  user: Address,
  image: string
): BusinessImageUpdated {
  let businessImageUpdatedEvent = changetype<BusinessImageUpdated>(
    newMockEvent()
  )

  businessImageUpdatedEvent.parameters = new Array()

  businessImageUpdatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  businessImageUpdatedEvent.parameters.push(
    new ethereum.EventParam("image", ethereum.Value.fromString(image))
  )

  return businessImageUpdatedEvent
}

export function createBusinessNameRegisteredEvent(
  user: Address,
  name: string
): BusinessNameRegistered {
  let businessNameRegisteredEvent = changetype<BusinessNameRegistered>(
    newMockEvent()
  )

  businessNameRegisteredEvent.parameters = new Array()

  businessNameRegisteredEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  businessNameRegisteredEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )

  return businessNameRegisteredEvent
}

export function createBusinessNameUpdatedEvent(
  user: Address,
  name: string
): BusinessNameUpdated {
  let businessNameUpdatedEvent = changetype<BusinessNameUpdated>(newMockEvent())

  businessNameUpdatedEvent.parameters = new Array()

  businessNameUpdatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  businessNameUpdatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )

  return businessNameUpdatedEvent
}

export function createEscrowCreatedEvent(
  buyer: Address,
  orderId: BigInt
): EscrowCreated {
  let escrowCreatedEvent = changetype<EscrowCreated>(newMockEvent())

  escrowCreatedEvent.parameters = new Array()

  escrowCreatedEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  escrowCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )

  return escrowCreatedEvent
}

export function createProductAddedEvent(
  farmer: Address,
  productName: string
): ProductAdded {
  let productAddedEvent = changetype<ProductAdded>(newMockEvent())

  productAddedEvent.parameters = new Array()

  productAddedEvent.parameters.push(
    new ethereum.EventParam("farmer", ethereum.Value.fromAddress(farmer))
  )
  productAddedEvent.parameters.push(
    new ethereum.EventParam(
      "productName",
      ethereum.Value.fromString(productName)
    )
  )

  return productAddedEvent
}

export function createProductReviewedEvent(
  buyer: Address,
  productId: BigInt,
  review: string
): ProductReviewed {
  let productReviewedEvent = changetype<ProductReviewed>(newMockEvent())

  productReviewedEvent.parameters = new Array()

  productReviewedEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  productReviewedEvent.parameters.push(
    new ethereum.EventParam(
      "productId",
      ethereum.Value.fromUnsignedBigInt(productId)
    )
  )
  productReviewedEvent.parameters.push(
    new ethereum.EventParam("review", ethereum.Value.fromString(review))
  )

  return productReviewedEvent
}

export function createProductUpdatedEvent(
  farmer: Address,
  productName: string
): ProductUpdated {
  let productUpdatedEvent = changetype<ProductUpdated>(newMockEvent())

  productUpdatedEvent.parameters = new Array()

  productUpdatedEvent.parameters.push(
    new ethereum.EventParam("farmer", ethereum.Value.fromAddress(farmer))
  )
  productUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "productName",
      ethereum.Value.fromString(productName)
    )
  )

  return productUpdatedEvent
}
