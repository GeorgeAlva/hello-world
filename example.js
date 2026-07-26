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
       * @private
       * @default false
       */
      _flagActive: { type: String, state: true },
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
    this._flagActive = false;
    this.isActive = false;
  }
}