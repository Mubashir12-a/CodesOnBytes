function countWords() {
    const textInput = document.getElementById('textInput');
    const wordCountElement = document.getElementById('wordCount');

    const text = textInput.value.trim();
    const words = text.split(/\s+/); // Split text by spaces

    const wordCount = words.length;
    wordCountElement.textContent = `Word count: ${wordCount}`;
}
