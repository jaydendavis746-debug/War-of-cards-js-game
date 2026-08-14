#  JS CLI Card Game

A simple command‑line implementation of the classic card game **War of Cards**, built in JavaScript.  
This version runs entirely in the terminal and uses `prompt-sync` for user input.

---

## 📦 Installation

Before running the game, install the required dependency:

```bash
npm install prompt-sync
```

## ▶️ Running the Game
Run the game using Node:

```bash
node cards.js
```
🃏 Game Overview
War is a simple but dramatic card game where two players battle using a standard 52‑card deck.
In this CLI version:

The deck is represented by numbers:

2–10 → Standard values

11 = Jack

12 = Queen

13 = King

14 = Ace

The deck is shuffled and split evenly:

Player 1 receives 26 cards

Player 2 (Computer) receives 26 cards

Each round:

Both players flip the top card of their deck.

The higher card wins the round.

The winner collects both cards and places them at the bottom of their deck.
