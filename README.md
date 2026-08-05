# Wordly - Interactive Dictionary (Single Page Application)

 You type in a word, and it shows
you the meaning, an example sentence, similar words, and lets you hear
how the word is pronounced .

## What This Project Does

1. You type a word into the search box.
2. The page asks a free online dictionary for information.
3. The page shows the word's meaning, example sentence, and similar
   words.
4. If the word doesn't exist, you see a  error message.
5. You can click a button to hear the word said out loud.
6. You can save words you like 
7. You can switch the page to Dark Mode.

## Files in This Project

index.html
style.css             |
script.js  
How it works 

1. fetchWordData(word)  asks the dictionary website for information about a word, and wait for the
   answer.
2. displayWordData(data) —  take the answer from step 1 and write it the page

3. showErrormessage —  error message if something went wrong

4. Event listeners — "wait and watch" for something to happen
   
   When one of these things happens, the  code runs.

## Where the Word Data Comes From

This project uses the (https://dictionaryapi.dev). .

## How to Run This Project in VS Code

1. Create a folder on your compute.
2. Put `index.html`, `style.css`, and `script.js` inside that folder.
3. Open VS Code, then  and choose your folder.
4. Go live
5. Type a word into the search box and click Search.