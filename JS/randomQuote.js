const quotes = [
    "The journey of a thousand miles begins with a single step. – Lao Tzu",
    "In the middle of difficulty lies opportunity. – Albert Einstein",
    "Do one thing every day that scares you. – Eleanor Roosevelt",
    "The best way to predict the future is to create it. – Peter Drucker",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
    "What you get by achieving your goals is not as important as what you become by achieving them. – Zig Ziglar",
    "Keep your face always toward the sunshine—and shadows will fall behind you. – Walt Whitman",
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Act as if what you do makes a difference. It does. – William James",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "Everything you can imagine is real. – Pablo Picasso",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
    "Whether you think you can or you think you can’t, you’re right. – Henry Ford",
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "Dream big and dare to fail. – Norman Vaughan",
    "What we think, we become. – Buddha",
    "The secret of getting ahead is getting started. – Mark Twain"

];

const randomIndex = Math.floor(Math.random() * quotes.length);

const quoteElement = document.getElementById("quote");

if (quoteElement) {
    quoteElement.textContent = quotes[randomIndex];
}
