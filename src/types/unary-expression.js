class UnaryExpression {
  constructor(token, value) {
    this.type = UnaryExpression.type;
    this.name = token.value;
    this.value = value;
  }

  parse() {
    return {
      type: this.type,
      name: this.name,
      value: this.value.parse()
    };
  }
}

UnaryExpression.type = 'UnaryExpression';

module.exports = UnaryExpression;
