class Example {
  static get properties() {
    return {
      /**
       * name user
       * @default ''
       */
      name: { type: String },
      /**
       * age user
       * @default ''
       */
      age: { type: Number },
      /**
       * flag to is active user
       * @default false
       */
      isActive: { type: Number },
      /**
       * @private
       * @default false
       */
      _isActiveOther: { type: Boolean }
    };
  }


  constructor() {
    super();
    this.name = '';
    this.age = '';
    this.isActive = false;
  }
}