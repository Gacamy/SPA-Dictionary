// STEP 1: GRAB THE HTML ELEMENTS WE NEED TO WORK WITH

const searchForm = document.getElementById("search-form");
const wordInput = document.getElementById("word-input");
const themeBtn = document.getElementById("theme-btn");

const errorMessage = document.getElementById("error-message");

const resultCard = document.getElementById("result-card");
const wordTitle = document.getElementById("word-title");
const playAudioBtn = document.getElementById("play-audio-btn");
const partOfSpeech = document.getElementById("part-of-speech");
const definitionText = document.getElementById("definition");
const exampleText = document.getElementById("example");
const synonymsText = document.getElementById("synonyms");
const saveBtn = document.getElementById("save-btn");

const savedList = document.getElementById("saved-list");

// remembers which word is currently being shown,

let currentWord = "";

// so the Play button knows what sound to play.
let currentAudioUrl = "";


// STEP 2: FETCH DATA 

async function fetchWordData(word) {

    const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;

    const response = await fetch(apiUrl);

    // If  not find 
    if (!response.ok) {
        throw new Error("Word not found");
    }

    const data = await response.json();
    return data;
}

// STEP 3

function displayWordData(data) {

    const entry = data[0];
    const firstMeaning = entry.meanings[0];
    const firstDefinition = firstMeaning.definitions[0];

    // Remember this word
    currentWord = entry.word;

    wordTitle.textContent = entry.word;
    partOfSpeech.textContent = firstMeaning.partOfSpeech;

    definitionText.textContent = firstDefinition.definition;


    if (firstDefinition.example) {
        exampleText.textContent = firstDefinition.example;
    } else {
        exampleText.textContent = "No example available.";
    }


    if (firstMeaning.synonyms.length > 0) {
        synonymsText.textContent = firstMeaning.synonyms.join(", ");
    } else {
        synonymsText.textContent = "No synonyms available.";
    }

    //
    currentAudioUrl = "";

    for (let i = 0; i < entry.phonetics.length; i++) {
        if (entry.phonetics[i].audio) {
            currentAudioUrl = entry.phonetics[i].audio;
            break; // stop looking once we find the first one
        }
    }

    // Only show  if we found an audio link.
    if (currentAudioUrl !== "") {
        playAudioBtn.classList.remove("hidden");
    } else {
        playAudioBtn.classList.add("hidden");
    }

    errorMessage.classList.add("hidden");
    resultCard.classList.remove("hidden");
}

// STEP 4:  ERROR MESSAGE

function showError(message) {
    resultCard.classList.add("hidden");
    errorMessage.textContent = message;
    errorMessage.classList.remove("hidden");
}

// STEP 5

searchForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const word = wordInput.value.trim();

    if (word === "") {
        return;
    }


    try {
        const data = await fetchWordData(word);
        displayWordData(data);

    } catch (error) {
        showError("Sorry, we couldn't find \"" + word + "\". Please check the spelling and try again.");
    }
});


// STEP 6
playAudioBtn.addEventListener("click", function () {

    if (currentAudioUrl !== "") {

        const audio = new Audio(currentAudioUrl);
        audio.play();
    }
});

// STEP 7: HANDLE THE SAVE BUTTON BEING CLICKED

saveBtn.addEventListener("click", function () {

    const listItem = document.createElement("li");
    listItem.textContent = currentWord;

    // Add it to the saved words list on the page.
    savedList.appendChild(listItem);
});

// STEP 8: DARK MODE BUTTON BEING CLICKED

themeBtn.addEventListener("click", function () {

    const isDarkMode = document.body.classList.toggle("dark-mode");

    if (isDarkMode) {
        themeBtn.textContent = "Light Mode";
    } else {
        themeBtn.textContent = "Dark Mode";
    }
});