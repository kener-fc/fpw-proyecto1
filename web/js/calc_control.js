/* 
 * Manejador de la Calculadora
 * 
 */
var CalcuFlujo = {};
CalcuFlujo = {
    data : {
      suma : {
        prioridad: 1,
        nombre: 'suma',
        //operation: function (a, b) {return a + b;},
        serviceURL: '/rest/calc/suma/',                
        buttonHTML: '+'
      }  
    },
    
    operacion : function (data) {
        
    },
    
    updateDisplay : function (add) {
        if (this.$display.text() === '0' && (add !== '.')){
            this.$display.text(add);
        }        
        else{
            this.$display.text(this.$display.text() + add);
        }
    },
    
    onNumberClicked : function (e){
        e.preventDefault();
        console.log("onNumberCliked: " +  $(e.currentTarget).text());
        this.updateDisplay($(e.currentTarget).text());
    },
    
    onOperationClicked : function (e) {
        e.preventDefault();
        console.log("onOperationClicked: " +  $(e.currentTarget).text());
        
    },
    
    clearDisplay: function (e){
        console.log('clearDisplay');
        e.preventDefault();
        this.$display.text("0");  
    },
    
    setEvents: function () {
        //Click de los numeros
        $('.number').on('click', $.proxy(this.onNumberClicked, this));
        //Click de las operaciones
        $('.operator').on('click', $.proxy(this.onOperationClicked, this));
        //Boton de clear
        $('#calculator-button-clear').on('click',$.proxy(this.clearDisplay, this));
    },
    
    init : function () {
        console.log('init calcu flujo.');
        this.$display = $('article .calculator .display-text');
        this.displayContet = '';
        
        this.setEvents();
    }
};

$(function () {
    CalcuFlujo.init();
});