let cardCount = 3;

function deleteCard(button) {
    const card = button.closest('.card');
    card.remove();
}

function addCard() {
    cardCount++;
    const cardContainer = document.getElementById('cardContainer');
    const newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.innerHTML = `
        <div class="card-header">
            <h2>#Item${cardCount}</h2>
            <button class="del-btn" onclick="deleteCard(this)">🗑️</button>
        </div>
        <div class="card-body">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus rerum vitae officia nam exercitationem quidem a explicabo quos hic similique?</p>
            <br />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus rerum vitae officia nam exercitationem quidem a explicabo quos hic similique?</p>
        </div>
    `;
    cardContainer.appendChild(newCard);
}
