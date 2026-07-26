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
       * @default '2'
       */
      age: { type: Number },
      /**
       * @private
       */
      _isActiveOther: { type: Boolean, state:true }
    };
  }


  constructor() {
    super();
    this.name = 'juan';
    this.age = '';
    this._isActiveOther = true
  }
}