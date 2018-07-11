function create(sentences) {
    for (let i = 0; i < sentences.length; i++) {
        let textContent = sentences[i];
        let newDiv = document.createElement('div');
        let paragraph = document.createElement('p');
        paragraph.textContent = textContent;
        paragraph.style.display = 'none';
        newDiv.appendChild(paragraph);
        newDiv.addEventListener('click', showP);
        function showP() {
            let innerP = this.childNodes[0];
            innerP.style.display = 'block';
        }

        let content = document.getElementById('content');
        content.appendChild(newDiv);
    }
}