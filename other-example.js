class ExampleTwo {
  static get properties() {
    return {
      /**
       * name user
       * @default ''
       */
      name: { type: String },
      /**
       * Age user
       * @default ''
       */
      age: { type: Number },
      /**
       * @private
       * @default false
       */
      _isActiveOther: { type: Boolean, state:true }
    };
  }


  constructor() {
    super();
    this.name = '';
    this.age = '';
    this._isActiveOther = false
  }
}