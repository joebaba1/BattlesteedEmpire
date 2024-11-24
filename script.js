console.log("Telegram Web App Loaded");

const telegramApiId = 'YOUR_API_ID';
const telegramApiHash = 'YOUR_API_HASH';

// Initialize Telegram Web App API
const TelegramWebApp = window.Telegram.WebApp;

TelegramWebApp.init({
  apiId: telegramApiId,
  hash: telegramApiHash,
}).then(() => {
  console.log('Telegram Web App API initialized!');
});

const telegramOAuthUrl = `(link unavailable){encodeURIComponent(window.location.href)}&hash=${telegramApiHash}`;

function authenticateUser() {
  window.open(telegramOAuthUrl, '_self');
}

document.getElementById('authenticate-btn').addEventListener('click', authenticateUser);
window.addEventListener('load', () => {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);

  if (params.has('hash')) {
    const authHash = params.get('hash');
    const authUserId = params.get('user_id');

    if (authHash === telegramApiHash) {
      // User authenticated, store user ID
      console.log(`User authenticated: ${authUserId}`);
      localStorage.setItem('telegramUserId', authUserId);
      
      // Grant access to protected features
      grantAccess(authUserId);
    } else {
      console.error('Invalid authorization hash');
    }
    
    // Function to grant access
    function grantAccess(userId) {
      // Call API to validate user permissions
      fetch('/api/validate-permissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.permissions) {
          // User has permissions, enable features
          enableFeatures();
        } else {
          // User lacks permissions, display error
          displayError('Insufficient permissions');
        }
      })
      .catch((error) => console.error('Error validating permissions:', error));

    // Verify authorization hash
    if (authHash === telegramApiHash) {
      // User authenticated, store user ID
      console.log(`User authenticated: ${authUserId}`);
    } else {
      console.error('Invalid authorization hash');
    }
  }
}


localStorage.setItem('telegramUserId', authUserId);

const TelegramBot = require('node-telegram-bot-api');

const TelegramNodeBot = require('telegram-node-bot');

const token = '7621848166:AAE4AD4P-Sf1mP5_1CXEe5WDjSO38gQZqew';

const bot = new TelegramBot('7621848166:AAE4AD4P-Sf1mP5_1CXEe5WDjSO38gQZqew', {polling: true});


//Command 1: Tap for gold
bot.onText(/\/tap_for_gold/, (msg) => {
  bot.sendMessage(('link unavailable'), 'Let\'s win!');
});

// Command 2: Join Community
bot.onText(/\/join_community/, (msg) => {
  bot.sendMessage(('link unavailable'), 'Join our community: [insert link]');
});

// Command 3: How to Play
bot.onText(/\/how_to_play/, (msg) => {
  bot.sendMessage(('link unavailable'), 'Learn how to play: [insert link or instructions]');
});

// Default response for unknown commands
bot.onText('message', (msg) => {
  bot.sendMessage(('link unavailable'), `Unknown command. Type /lets_glory, /join_community, or /how_to_play.`);
})
});
