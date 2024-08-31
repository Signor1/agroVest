import {
  BusinessImageRegistered as BusinessImageRegisteredEvent,
  BusinessImageUpdated as BusinessImageUpdatedEvent,
  BusinessNameRegistered as BusinessNameRegisteredEvent,
  BusinessNameUpdated as BusinessNameUpdatedEvent,
  EscrowCreated as EscrowCreatedEvent,
  ProductAdded as ProductAddedEvent,
  ProductReviewed as ProductReviewedEvent,
  ProductUpdated as ProductUpdatedEvent,
} from "../generated/farm/farm"
import {
  BusinessImageRegistered,
  BusinessImageUpdated,
  BusinessNameRegistered,
  BusinessNameUpdated,
  EscrowCreated,
  ProductAdded,
  ProductReviewed,
  ProductUpdated,
} from "../generated/schema"

export function handleBusinessImageRegistered(
  event: BusinessImageRegisteredEvent,
): void {
  let entity = new BusinessImageRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.user = event.params.user
  entity.image = event.params.image

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBusinessImageUpdated(
  event: BusinessImageUpdatedEvent,
): void {
  let entity = new BusinessImageUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.user = event.params.user
  entity.image = event.params.image

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBusinessNameRegistered(
  event: BusinessNameRegisteredEvent,
): void {
  let entity = new BusinessNameRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.user = event.params.user
  entity.name = event.params.name

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBusinessNameUpdated(
  event: BusinessNameUpdatedEvent,
): void {
  let entity = new BusinessNameUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.user = event.params.user
  entity.name = event.params.name

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEscrowCreated(event: EscrowCreatedEvent): void {
  let entity = new EscrowCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.buyer = event.params.buyer
  entity.orderId = event.params.orderId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProductAdded(event: ProductAddedEvent): void {
  let entity = new ProductAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.farmer = event.params.farmer
  entity.productName = event.params.productName

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProductReviewed(event: ProductReviewedEvent): void {
  let entity = new ProductReviewed(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.buyer = event.params.buyer
  entity.productId = event.params.productId
  entity.review = event.params.review

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProductUpdated(event: ProductUpdatedEvent): void {
  let entity = new ProductUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.farmer = event.params.farmer
  entity.productName = event.params.productName

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
