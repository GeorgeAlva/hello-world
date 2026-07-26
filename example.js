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
      isActive: { type: Boolean, attribute: 'is-active' },
      /**
       * @private
       * @default false
       */
      _isActiveOther: { type: Boolean, state: true }
    };
  }


  constructor() {
    super();
    this.name = '';
    this.age = '';
    this.isActive = false;
  }
}