class Identifier {
  constructor(token) {
    this.type = Identifier.type;
    this.name = token.value;
  }

  parse() {
    return {
      type: this.type,
      name: this.name
    };
  }
}

Identifier.type = 'Identifier';

module.exports = Identifier;
