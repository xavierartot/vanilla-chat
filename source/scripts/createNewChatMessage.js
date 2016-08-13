function createNewChatMessage(message) {
	// Messages have a date, content, author, and author image,
	// each contained within a div with a main div encompassing
	// the entire message.

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
	messageContentDiv.appendChilld(messageContentP);
	messageContentDiv.classList.add('content');


	const messageAuthor = document.createTextNode(message.author),
				messageAuthorP = document.createElement('p'),
				messageAuthorDiv = document.createElement('div');

	messageAuthorP.appendChild(messageAuthor);
	messageAuthorDiv.appendChild(messageAuthorP);
	messageAuthorDiv.classList.add('author');


	const messageAuthorImage = document.createElement('img'),
				messageAuthorImageDiv = document.createElement('div');

	messageAuthorImage.setAttribute('src', message.authorImage);
	messageAuthorImageDiv.appendChild(messageAuthorImage);
	messageAuthorImageDiv.classList.add('author-image');

	const messageDiv = document.createElement('div');

	messageDiv.appendChild(messageAuthorImageDiv);
	messageDiv.appendChild(messageAuthorDiv);
	messageDiv.appendChild(messageContentDiv);
	messageDiv.appendChild(messageDateDiv);
	messageDiv.classList.add('message');


	// TODO: Grab this div within a closure.
	document.getElementById('chat-room').appendChild(messageDiv);
}
