function createNewChatMessage(message) {
	// Messages have a date, content, author, and author image,
	// each contained within a div with a main div encompassing
	// the entire message.

	const messageDate = document.createTextNode(message.date),
				messageDateDiv = document.createElement('div');
				messageDateDiv.classList.add('date');
				messageDateDiv.appendChild(messageDate);

	const messageContent = document.createTextNode(message.content),
				messageContentDiv = document.createElement('div');
				messageContentDiv.classList.add('content');
				messageContentDiv.appendChild(messageContent);

	const messageAuthor = document.createTextNode(message.author),
				messageAuthorDiv = document.createElement('div');
				messageAuthorDiv.classList.add('author');
				messageAuthorDiv.appendChild(messageAuthor);

	const messageAuthorImage = document.createElement('img'),
				messageAuthorImageDiv = document.createElement('div');
				messageAuthorImage.setAttribute('src', message.authorImage);
				messageAuthorImageDiv.classList.add('author-image');
				messageAuthorImageDiv.appendChild(messageAuthorImage);

	const messageDiv = document.createElement('div');
				messageDiv.classList.add('message');
				messageDiv.appendChild(messageAuthorImageDiv);
				messageDiv.appendChild(messageAuthorDiv);
				messageDiv.appendChild(messageContentDiv);
				messageDiv.appendChild(messageDateDiv);

	// TODO: Grab this div within a closure.
	document.getElementById('chat-room').appendChild(messageDiv);
}
