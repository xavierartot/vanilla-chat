document.getElementById('add-message').addEventListener('click', addMessage);

function addMessage( ) {
	createNewChatMessage({
		date: '12/20/1993',
		content: 'Hey there! Hiiii!',
		author: 'Tim Jones',
		authorImage: 'http://bit.ly/2b53L1B'
	})
}

function createNewChatMessage(message) {

	const messageDate = document.createTextNode(message.date),
				messageDateSmall = document.createElement('small'),
				messageDateDiv = document.createElement('div');

	messageDateSmall.appendChild(messageDate);
	messageDateDiv.appendChild(messageDateSmall);
	messageDateDiv.classList.add('date');

	const messageContent = document.createTextNode(message.content),
				messageContentP = document.createElement('p'),
				messageContentDiv = document.createElement('div');

	messageContentP.appendChild(messageContent);
	messageContentDiv.appendChild(messageContentP);
	messageContentDiv.classList.add('content');


	const messageAuthor = document.createTextNode(message.author),
				messageAuthorP = document.createElement('p'),
				messageAuthorDiv = document.createElement('div');

	messageAuthorP.appendChild(messageAuthor);
	messageAuthorDiv.appendChild(messageAuthorP);
	messageAuthorDiv.classList.add('author');

	const messageColumn = document.createElement('div');

	messageColumn.appendChild(messageAuthorDiv);
	messageColumn.appendChild(messageContentDiv);
	messageColumn.appendChild(messageDateDiv);
	messageColumn.classList.add('message-column');

	const messageAuthorImage = document.createElement('img'),
				messageAuthorImageDiv = document.createElement('div');

	messageAuthorImage.setAttribute('src', message.authorImage);
	messageAuthorImageDiv.appendChild(messageAuthorImage);
	messageAuthorImageDiv.classList.add('author-image');

	const messageDiv = document.createElement('div');

	messageDiv.appendChild(messageAuthorImageDiv);
	messageDiv.appendChild(messageColumn);
	messageDiv.classList.add('message');

	messageDiv.addEventListener('click', handleMessageClick);

	// TODO: Grab this div within a closure.
	document.getElementById('chat-room').appendChild(messageDiv);
}

function handleMessageClick( ) {
	alert(this.innerHTML);
}
