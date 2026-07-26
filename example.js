class Example {
  static get properties() {
    return {
      name: { type: String },
      age: { type: Number },
      _isActiveOther: { type: Boolean }
    };
  }


  constructor() {
    super();
    this.name = '';
    this.isActive = false;
  }
}