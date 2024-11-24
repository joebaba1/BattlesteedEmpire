  // Unlock next level
  if (level < levelsTotal && !unlockedLevels.includes(level + 1)) {
    unlockedLevels.push(level + 1);
}

// Handle daily boost button click
dailyBoostButton.addEventListener('click', () => {
if (dailyBoostCount < 3) {
playerAttack += 50;
playerAttackDisplay.textContent = playerAttack;
dailyBoostCount++;

if (dailyBoostCount === 3) {
    dailyBoostButton.style.display = 'none';
}
}
});

// Handle bomb attack button click
bombAttackButton.addEventListener('click', () => {
if (bombAttackAvailable) {
finalBossHealth -= 200;
finalBossHealthDisplay.textContent = finalBossHealth;
bombAttackAvailable = false;
bombAttackButton.style.display = 'none';
}
});

// Recharge player attack
function rechargePlayerAttack() {
playerAttack += 10;
playerAttackDisplay.textContent = playerAttack;

if (playerAttack >= 100) {
clearInterval(attackRechargeInterval);
}
}

// Update game stats display
function updateGameStats() {
coinsDisplay.textContent = coins;
treasuresFoundDisplay.textContent = treasuresFound;
levelDisplay.textContent = level;
healthDisplay.textContent = health;
playerAttackDisplay.textContent = playerAttack;
}

// Check level progress
function checkLevelProgress() {
if (treasuresFound >= 10 && level < levelsTotal) {
digButton.style.display = 'none';
nextLevelButton.style.display = 'block';
}
}

drawTreasureMap();
updateGameStats();

// Add event listener for touch screen
document.addEventListener('touchstart', () => {
if (finalBossContainer.style.display === 'block') {
attackBossButton.click();
}
});

// ...

// Bomb attack variables
let bombAttackAvailable = false;
let bombAttackCooldown = 3 * 60 * 60 * 1000; // 3 hours
let bombAttackUpgradeLevel = 1;
let bombAttackDamage = 200;

// Player upgrade variables
let playerHealthUpgradeLevel = 1;
let playerHealth = 100;
let playerEnduranceUpgradeLevel = 1;
let playerEndurance = 10;

// Upgrade costs
let healthUpgradeCost = 1000;
let bombAttackUpgradeCost = 2000;
let enduranceUpgradeCost = 500;

// ...

// Handle bomb attack button click
bombAttackButton.addEventListener('click', () => {
if (bombAttackAvailable) {
finalBossHealth -= bombAttackDamage;
finalBossHealthDisplay.textContent = finalBossHealth;
bombAttackAvailable = false;
bombAttackButton.style.display = 'none';

// Start cooldown
setTimeout(() => {
    bombAttackAvailable = true;
    bombAttackButton.style.display = 'block';
}, bombAttackCooldown);
}
});

// Handle upgrade button clicks
healthUpgradeButton.addEventListener('click', () => {
if (coins >= healthUpgradeCost) {
coins -= healthUpgradeCost;
playerHealthUpgradeLevel++;
playerHealth += 10;
healthDisplay.textContent = playerHealth;
healthUpgradeCost *= 2;
}
});

bombAttackUpgradeButton.addEventListener('click', () => {
if (coins >= bombAttackUpgradeCost) {
coins -= bombAttackUpgradeCost;
bombAttackUpgradeLevel++;
bombAttackDamage += 50;
bombAttackUpgradeCost *= 2;
}
});

enduranceUpgradeButton.addEventListener('click', () => {
if (coins >= enduranceUpgradeCost) {
coins -= enduranceUpgradeCost;
playerEnduranceUpgradeLevel++;
playerEndurance += 5;
enduranceUpgradeCost *= 2;
}
});

// Handle endurance button click
enduranceButton.addEventListener('click', () => {
if (playerEndurance > 0) {
playerHealth += playerEndurance;
playerEndurance -= playerEndurance;
healthDisplay.textContent = playerHealth;
}
});

// ...

// Update game stats display
function updateGameStats() {
coinsDisplay.textContent = coins;
treasuresFoundDisplay.textContent = treasuresFound;
levelDisplay.textContent = level;
healthDisplay.textContent = playerHealth;
bombAttackDisplay.textContent = bombAttackDamage;
enduranceDisplay.textContent = playerEndurance;
}

// Update upgrade display
function updateUpgradeDisplay() {
    document.getElementById('health-upgrade-level').textContent = playerHealthUpgradeLevel;
    document.getElementById('bomb-attack-upgrade-level').textContent = bombAttackUpgradeLevel;
    document.getElementById('endurance-upgrade-level').textContent = playerEnduranceUpgradeLevel;
    document.getElementById('health-upgrade-cost').textContent = healthUpgradeCost;
    document.getElementById('bomb-attack-upgrade-cost').textContent = bombAttackUpgradeCost;
    document.getElementById('endurance-upgrade-cost').textContent = enduranceUpgradeCost;
}


// Handle upgrade button clicks
healthUpgradeButton.addEventListener('click', () => {
    // ...
    updateUpgradeDisplay();
});

bombAttackUpgradeButton.addEventListener('click', () => {
    // ...
    updateUpgradeDisplay();
});

enduranceUpgradeButton.addEventListener('click', () => {
    // ...
    updateUpgradeDisplay();
});

// Display upgrade levels and costs //

