var app = new Vue({
  el: '#app',
  data: {
    name: '',
    goodsFrom: [
      { name: 'Гречка, кг', desc: 'Гречка, кг' },
      { name: 'Туалетний Папір, рул', desc: 'Туалетний Папір, рул' },
      { name: 'Сіль, кг', desc: 'Сіль, кг' },
      { name: 'Місце В Автобусі, шт', desc: 'Місце В Автобусі, шт'},
      { name: 'Маска медична, шт', desc: 'Маска медична, шт'},
    ],
    convertFrom: 'Гречка, кг',
    convertTo: 'Туалетний Папір, рул',
    quantity: ''
  },
  computed: {
      resultQuantity: function() {
          let to = this.convertTo
          let from = this.convertFrom
          let result
          switch (from) {
              case 'Гречка, кг':
                  if (to == 'Туалетний Папір, рул') {
                      result = this.quantity * 4
                  }
                  if (to == 'Сіль, кг') {
                    result = this.quantity * 2
                }
                if (to == 'Місце В Автобусі, шт') {
                    result = this.quantity * 3
                }
                if (to == 'Гречка, кг') {
                    result = this.quantity
                }
                if (to == 'Маска медична, шт') {
                    result = this.quantity
                }
                case 'Маска медична, шт':
                  if (to == 'Туалетний Папір, рул') {
                      result = this.quantity * 4
                  }
                  if (to == 'Сіль, кг') {
                    result = this.quantity * 2
                }
                if (to == 'Місце В Автобусі, шт') {
                    result = this.quantity * 3
                }
                if (to == 'Гречка, кг') {
                    result = this.quantity
                }
                if (to == 'Маска медична, шт') {
                    result = this.quantity
                }
                  break;
                  case 'Туалетний Папір, рул':
                    if (to == 'Туалетний Папір, рул') {
                        result = this.quantity
                    }
                    if (to == 'Сіль, кг') {
                      result = this.quantity * 0.5
                  }
                  if (to == 'Місце В Автобусі, шт') {
                      result = this.quantity * 0.75
                  }
                  if (to == 'Гречка, кг') {
                      result = this.quantity * 0.25
                  }
                  if (to == 'Маска медична, шт') {
                    result = this.quantity * 0.25
                }
                    break;
                    case 'Сіль, кг':
                    if (to == 'Туалетний Папір, рул') {
                        result = this.quantity * 2
                    }
                    if (to == 'Сіль, кг') {
                      result = this.quantity
                  }
                  if (to == 'Місце В Автобусі, шт') {
                      result = this.quantity * 1.5
                  }
                  if (to == 'Гречка, кг') {
                      result = this.quantity * 0.5
                  }
                  if (to == 'Маска медична, шт') {
                    result = this.quantity * 0.5
                }
                    break;
                    case 'Місце В Автобусі, шт':
                    if (to == 'Туалетний Папір, рул') {
                        result = this.quantity * 1.33
                    }
                    if (to == 'Сіль, кг') {
                      result = this.quantity * 0.66
                  }
                  if (to == 'Місце В Автобусі, шт') {
                      result = this.quantity
                  }
                  if (to == 'Гречка, кг') {
                      result = this.quantity * 0.33
                  }
                  if (to == 'Маска медична, шт') {
                    result = this.quantity * 0.33
                }
                    break;
          }
          return result
      }
  }
});
// grech - 24
// pap - 6
// solt - 12
// bus - 8