let messages = [];

export default function notify(message) {
  messages.push(message);
}

export function getMessages() {
  return messages;
}

export function resetMessages() {
  messages = [];
}
