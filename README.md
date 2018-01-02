# Hangman

## About

This application is programmed using node.js utilizing the command prompt window and various NPM packages.

The program starts by allowing the user to choose from 3 different categories to play from. All of these categories read from a text file which has a list of words for the user to guess from.

For instance, if you choose "Animals", the program will randomly choose a word - let's say "Cheetah" - and display it as "_ _ _ _ _ _ _".

Once the word is chosen and hidden from the user, the prompt will ask for user input to guess a letter...

If the letter is right, it will show up in the appropriate spot in the index of the word

If the letter is wrong, it will substract from the number of guesses allowed per round which is 9.

Once the round is over, you will be asked if you want to play again and allowed to choose from the category list again!



