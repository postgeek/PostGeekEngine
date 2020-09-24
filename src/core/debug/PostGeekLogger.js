class PostGeekLogger {
  constructor() {
    this.messages = [];
  }

  error(error) {
    this.messages.push(error);
  }

  message(message) {
    this.messages.push(message);
  }

  log(message) {
    this.messages.push(message);
  }

  warn(warning) {
    this.messages.push(warning);
  }

  getAllErrors() {
    const errors = this.messages;
    return errors;
  }

  getAllMessages() {
    const { messages } = this;
    return messages;
  }

  getAllWarnings() {
    const warings = this.messages;
    return warings;
  }
} export default PostGeekLogger;
