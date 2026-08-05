# Wordly - Interactive Dictionary (Single Page Application)

This is a simple dictionary website. You type in a word, and it shows
you the meaning, an example sentence, similar words, and lets you hear
how the word is pronounced — all without the page reloading.

## What This Project Does

1. You type a word into the search box.
2. The page asks a free online dictionary (an "API") for information
   about that word.
3. The page shows the word's meaning, example sentence, and similar
   words (synonyms) right there on screen — no reload needed.
4. If the word doesn't exist, you see a friendly error message
   instead.
5. You can click a button to hear the word said out loud.
6. You can save words you like to a list at the bottom of the page.
7. You can switch the page to Dark Mode.

## Files in This Project

This project uses three files. Keep them all in the **same folder**,
and don't rename them, since they refer to each other by name.

| File         | What's inside
| `index.html` | The page itself — the search box, the buttons, and empty spaces waiting to be filled in with the word's details |
| `style.css`  | The colors, spacing, and how things look             |
| `script.js`  | The "brain" of the app — the code that talks to the dictionary and fills in the page |
How it works 

The JavaScript code in `script.js` is split into small pieces, each
piece doing ONE simple job:

1. **`fetchWordData(word)`** — this function's only job is to ask the
   dictionary website for information about a word, and wait for the
   answer. It doesn't touch the page at all.

2. **`displayWordData(data)`** — this function's only job is to take
   the answer from step 1 and write it onto the page (the word,
   meaning, example, synonyms, and audio button).

3. **`showError(message)`** — this function's only job is to show a
   red error message if something went wrong (like the word not being
   found).

4. **Event listeners** — these are pieces of code that "wait and
   watch" for something to happen, like:
   - the Search form being submitted
   - the Play button being clicked
   - the Save button being clicked
   - the Dark Mode button being clicked

   When one of these things happens, the matching code runs.

## Where the Word Data Comes From

This project uses the **Free Dictionary API**
(`https://dictionaryapi.dev`). It's free, and you don't need to sign
up or get a password (called an "API key") to use it — you just send
it a word, and it sends back the information.

## How to Run This Project in VS Code

1. Create a folder on your computer, for example `wordly-dictionary`.
2. Put `index.html`, `style.css`, and `script.js` inside that folder.
3. Open VS Code, then go to **File → Open Folder**, and choose your
   folder.
4. Install the **Live Server** extension:
   - Click the Extensions icon on the left side of VS Code (it looks
     like 4 small squares).
   - Search for "Live Server" (made by Ritwick Dey).
   - Click **Install**.
5. In VS Code's file list, right-click `index.html`, then click
   **"Open with Live Server"**.
6. Your web browser should open automatically. Check the address bar
   — it should say something like `http://127.0.0.1:5500/...`. If it
   instead says `file://...`, close it and use step 5 again, since
   the dictionary lookup won't work otherwise.
7. Type a word into the search box (try "happy") and click **Search**.

## Testing Checklist

Try each of these to make sure everything works:

- [ ] Search **"happy"** — the definition, example, and synonyms
      should appear.
- [ ] Click the **Play Pronunciation** button — you should hear the
      word spoken.
- [ ] Search a made-up word like **"asdfgh"** — you should see a red
      error message, not a broken page.
- [ ] Click **Save Word** after a search — the word should appear
      under "Saved Words".
- [ ] Click **Dark Mode** — the page colors should switch, and the
      button should now say "Light Mode".

## Common Problems and Fixes

**Nothing happens when I click Search.**
Right-click the page → **Inspect** → click the **Console** tab. Click
Search again and read any red text — it usually points to exactly
what's wrong. A common cause is opening `index.html` by double-clicking
it instead of using Live Server.

**No colors or styling show up at all.**
Check the `<link rel="stylesheet" href="style.css">` line inside
`index.html`. The filename inside the quotes must match your CSS
file's actual name exactly, letter for letter (for example,
`style.css` is not the same file as `styles.css`).

**The word is found, but an old error message is still showing.**
Check that `style.css` includes this exact rule somewhere in it:
```css
.hidden {
  display: none;
}
```

**There's no Play Pronunciation button showing up.**
This is normal for some words — not every word in the dictionary has
an audio file available. Try "happy" or "hello" instead.

## Credit

Word definitions and audio pronunciations are provided by the free
[Free Dictionary API](https://dictionaryapi.dev).