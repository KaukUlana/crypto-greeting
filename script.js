const facts = [
  "Bitcoin was created by an unknown person named Satoshi Nakamoto.",
  "The maximum supply of Bitcoin is 21 million.",
  "Ethereum introduced smart contracts to the blockchain world.",
  "The first real-world BTC purchase was two pizzas.",
  "Crypto keys must always be kept safe.",
  "Blockchain is basically a distributed database."
];

document.getElementById("factBtn").addEventListener("click", () => {
  const random = Math.floor(Math.random() * facts.length);
  document.getElementById("factBox").textContent = facts[random];
});
