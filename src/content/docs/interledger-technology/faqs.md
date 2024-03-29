---
title: FAQs
sidebar:
  order: 6
---

This page covers a few common questions we receive about Interledger-enabled systems.

## How is Interledger different from PayPal or Venmo?

- Traditional digital wallets, such as PayPal and Venmo, typically operate as closed networks, only allowing you to trade with other people in the same ecosystem. For example, you can only send a payment via Venmo to another Venmo user.
- Many traditional digital wallets often require you to already have an account with a traditional financial system (such as a bank) before you can create a wallet account.
- International transfers, or transferring (exchanging) money between currencies, is either impossible on many existing digital wallets, or time-consuming and expensive.
- ILP is interoperable, doesn’t require a specific financial system, and reduces time and costs.

## What is Rafiki?

[Rafiki](https://rafiki.dev) is open source software, developed by the Interledger Foundation, that enables account servicing entities (ASEs) to implement Interledger functionality on users' accounts.

Rafiki simplifies the Interledger onboarding process for ASEs by packaging up the components necessary for operating on the Interledger network. This means ASEs don't have to build and maintain their own custom integrations.

## What is Open Payments?

[Open Payments](https://openpayments.dev) is a separate set of open source standards developed by the Interledger community that govern how clients (e.g., mobile apps) can interact with an account servicing entity.

ILP lets you transfer money, but Open Payments governs how a client can access an account (with permission) to initiate payments and retrieve details like transaction history. This is in some ways a separate/complementary function that exists on the application layer.

Open Payments supports ILP as a payment method, but can also be used with other digital clearing and settlement protocols that might exist. The Interledger Foundation advocates for the use of Open Payments, whether through ILP or other payment methods.

## What safety and security mechanisms are in ILP?

- The system uses shared secrets. A shared secret is essentially a code that the receiver gives to the sender to ensure that money only exchanges hands if the packets are sent to the right place and contain the right secret code.
- In each peer-to-peer relationship, there must be a formal legal agreement between the two so that they can clear transactions with each other. This process legally binds them to honoring their transactions.
- ILP uses a system called “penny switching” which makes transfers by sending many small value (aka “penny”) packets. Although bad actors in the network could try to steal from the rest of the network, or benign problems might cause an occasional packet to be lost, each packet is relatively low value and these situations can be easily fixed in order to transfer the rest of the value.
- No system is ever perfect, and issues will always emerge over time. But being open source is in itself a security feature, and it means many more people, from many more perspectives, have their eyes on the technology to discover and proactively fix problems.
- The Interledger Foundation also works with third-party security companies to perform periodic audits on the code and functionality of Rafiki. This ensures the security of the service is constantly monitored and improved.

## Does ILP work better than our current banking processes?

Yes, on a technical level, ILP works better than our current banking processes.

- Separating out settlement from clearing increases speed and reduces complexity. This is what makes traditional wire transfers so costly and time consuming.
- The internet has made widespread interoperability commonplace, but the financial system has yet to catch up. Can you imagine if Gmail users could only send emails to other Gmail users, and Outlook users to other Outlook users? It’s unimaginable now, but that is how our financial system operates. An ILP standard that everyone adopts can allow any financial system to talk to any other financial system, bursting through these network barriers to financial inclusion.
