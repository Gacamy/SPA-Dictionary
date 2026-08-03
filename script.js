const searchForm = document.getElementById("search-form");
const wordInput = document.getElementById("word-input");
const themeBtn = document.getElementById("theme-btn");

const errorMessage = document.getElementById("error-message");

const resultCard = document.getElementById("result-card");
const wordTitle = document.getElementById("word-title");
const partOfSpeech = document.getElementById("part-of-speech");
const definitionText = document.getElementById("definition");
const exampleText = document.getElementById("example");
const synonymsText = document.getElementById("synonyms");
const saveBtn = document.getElementById("save-btn");

const savedList = document.getElementById("saved-list");
let currentWord = "";

async function fetchWordData(word) {

    const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;

    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error("Word not found");
    }
    const data = await response.json();
    return data;
}

function displayWordData(data) {

    const entry = data[0];
    const firstMeaning = entry.meanings[0];
    const firstDefinition = firstMeaning.definitions[0];

    // Remember this word so the Save button can use it.
    currentWord = entry.word;

    wordTitle.textContent = entry.word;
    partOfSpeech.textContent = firstMeaning.partOfSpeech;

    definitionText.textContent = firstDefinition.definition;

    // Some words don't have an example sentence.
    if (firstDefinition.example) {
        exampleText.textContent = firstDefinition.example;
    } else {
        exampleText.textContent = "No example available.";
    }

    // Check first.
    if (firstMeaning.synonyms.length > 0) {
        synonymsText.textContent = firstMeaning.synonyms.join(", ");
    } else {
        synonymsText.textContent = "No synonyms available.";
    }

    errorMessage.classList.add("hidden");
    resultCard.classList.remove("hidden");
}

function showError(message) {
    resultCard.classList.add("hidden");
    errorMessage.textContent = message;
    errorMessage.classList.remove("hidden");
}

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

saveBtn.addEventListener("click", function () {

    // Create a new list item with the current word's text.
    const listItem = document.createElement("li");
    listItem.textContent = currentWord;

    // Add it to the saved words list on the page.
    savedList.appendChild(listItem);
});

themeBtn.addEventListener("click", function () {

    const isDarkMode = document.body.classList.toggle("dark-mode");

    if (isDarkMode) {
        themeBtn.textContent = "Light Mode";
    } else {
        themeBtn.textContent = "Dark Mode";
    }
});