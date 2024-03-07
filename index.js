const textSummer = require('text-summarizerly');
const colorPale = require('color-pale-generatorly');
const randPass = require('randomly-password-generator');
const colorGen = require('color_generator_complex');

const emojiMap = {
    // Sample emoji mappings for common words and phrases
    'happy': '',
    'sad': '',
    'angry': '',
    'laugh': '',
    'hello': '',
    'world': '',
    'good': '',
    'bad': '',
    'love': '❤️',
    'thank': '',
    'sun': '☀️',
    'moon': '',
    'rain': '️',
    'smile': '',
    'cry': '',
    'coffee': '☕️',
    'food': '️',
    'sleep': '',
    'music': '',
    'book': '',
    'movie': '',
    // ... (add more mappings as needed)
  };
  
  function textToEmoji(text) {
    const words = text.split(/\s+/);
    const emojiArray = words.map(word => {
      const emoji = emojiMap[word.toLowerCase()];
      return emoji || word; // Use original word if emoji not found
    });
    return emojiArray.join(' ');
  }
  
  module.exports = textToEmoji;
  