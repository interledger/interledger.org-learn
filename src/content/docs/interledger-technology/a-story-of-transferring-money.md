---
title: A Story of Transferring Money
sidebar:
  order: 2
---

To show how the Interledger Protocol functions, let’s start with a story.

Pretend this is a world without the internet. Alice wants to pay Bob $5 USD. Alice lives in New York, USA, while Bob lives in London, UK. Short of flying to London herself, how can Alice pay Bob?

## Transfer 1

Alice’s friend, Carol, is flying to London. Alice asks Carol to pay Bob $5 USD and promises to pay Carol back when she returns. Carol knows Alice well and accepts Alice’s promise.

:::note[ILP learning]

When using ILP, you don’t actually exchange money. You exchange a promise to pay (an IOU). In this story, Alice and Carol represent two banks that are peers on the ILP network. Every group of peers can have their own set of relationships and rules. Since Carol trusts Alice, she accepts Alice’s promise. They both adjust their balance (or ledgers) to show that Alice owes Carol $5 USD to be paid (settled) later.

What if Carol doesn’t trust Alice? Carol can require Alice to pay now, rather than take an IOU. In that case, Carol would be asking for the balance to be deposited into her account before she carries on with the transaction.

:::

## Transfer 2

Carol lands in London and finds Bob. However, Bob wants the payment in GBP. Since Carol has some British pounds to use during her travels, she works out the exchange rate and pays Bob £3.50.

:::note[ILP learning]

Each account between peers can only operate in one currency at a time. To exchange currency, you must work with a peer that operates multiple accounts in different currencies. Since Carol is transacting with Alice and Bob, we can say that Carol has one account that operates in USD and another account that operates in GBP.

:::

## Confirming the transfer

When Carol gets back to the US, she tells Alice that Bob was paid. Alice then pays Carol $5 USD as promised.

:::note[ILP learning]

ILP involves a two-way message. The first part of the message, called a Prepare packet, communicates a payment condition from the sender to the receiver. The second part of the message, sent by the receiver, indicates whether the condition is acceptable (as a Fulfill packet) or unacceptable (a Reject packet). The message always returns to the sender through the same network of peers.

In our story, Bob accepts Alice’s intent to pay (the Fulfill packet). The exchange of actual money between Carol and Bob, and Alice and Carol, is known as settlement. Settlement happens separate from and outside of the Interledger network. This is one advantage of ILP because settlement is typically a slow and expensive process.

:::
