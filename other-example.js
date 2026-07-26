class ExampleTwo {
  static get properties() {
    return {
      name: { type: String },
      age: { type: Number },
      _isActiveOther: { type: Boolean, state:true }
    };
  }


  constructor() {
    super();
    this.name = '';
  }
}