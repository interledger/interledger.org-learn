---
title: FAQs
sidebar:
  order: 7
---

Next, we’ll run through some common questions about Interledger-enabled systems.

## What makes an Interledger-enabled system different from using Paypal or Venmo?

- Traditional digital wallets typically only allow you to trade with other people in their ecosystem. Aka, you can only send money via Venmo to another Venmo user.
- Setting up accounts on many traditional digital wallets often requires already having a bank account with a traditional financial system.
- International transfers, or transferring (exchanging) money between currencies, is either impossible on many existing digital wallets, or time-consuming and expensive.
- ILP is interoperable, doesn’t require a specific financial system, and reduces time and costs (for technical reasons explained on the next slide).

## So I’ve heard about this Rafiki thing, what is it?

Rafiki is an open source software developed by the Interledger Foundation that is built to get all the layers in grey right. It packages up a bunch of software that uses STREAM, ILPv4 and BTP (the three middle and more hidden layers of ILP) to enable an account servicing entity (bank or wallet provider) to comply with all four layers of the ILP without having to encode those rules in software code. It simplifies the process of complying with the ILP standards.

## And how about Open Payments?

Open Payments is a separate set of open source standards developed by the Interledger community that govern how clients (e.g., mobile apps) can interact with an account servicing entity. ILP lets you transfer money, but Open Payments governs how a client can access an account (with permission) to initiate payments and retrieve details like transaction history. This is in some ways a separate/complementary function that exists on the application layer. Open Payments is compatible with ILP, but can also be used with other digital clearing and settlement protocols that might exist. The Interledger Foundation advocates for the use of Open Payments, whether through ILP or other payment methods.

## What are the safety and security mechanisms in the Interledger Protocol?

- The system uses “shared secrets” which is essentially a code that the receiver gives to the sender to ensure that money only exchanges hands if the packets are sent to the right place and contain the right “secret” code.
- In each peer-to-peer relationship, there must be a formal legal agreement between the two so that they can clear transactions with each other. This process legally binds them to honoring their transactions.
- ILPv4 uses a system called “penny switching” which makes transfers by sending many small value (aka “pennies”) packets. Although bad actors in the network could try to “steal” from the rest of the network, or benign problems might cause an occasional packet to be lost, each packet is relatively low value and these situations can be easily fixed in order to transfer the rest of the value.
- No system is ever perfect, and issues will always emerge over time. But being open source is in itself a security feature, and it means many more people, from many more perspectives, have their eyes on the technology to discover and proactively fix problems.
- The Interledger Foundation also works with third-party security companies to perform periodic audits on the code and functionality of Rafiki. This ensures the security of the service is constantly monitored and improved.

## Why on a technical level does ILP work better than our current banking processes?

- Separating out settlement from clearing increases speed and reduces complexity. This is what makes traditional wire transfers so costly and time consuming.
- The internet has made widespread interoperability commonplace, but the financial system has yet to catch up. Can you imagine if Gmail users could only send emails to other Gmail users, and Outlook users to other Outlook users? It’s unimaginable now, but that is how our financial system operates. An ILP standard that everyone adopts can allow any financial system to talk to any other financial system, bursting through these network barriers to financial inclusion.
