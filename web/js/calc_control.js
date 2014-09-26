/* 
 * Manejador de la Calculadora
 * 
 */
CalcuFlujo = {};
CalcuFlujo = {
    data : {
      suma : {
        precedence: 1,
        nombre: 'suma',
        //operation: function (a, b) {return a + b;},
        serviceURL: '',                
        buttonHTML: '+' 
      }  
    },
    
    operacion : function (data) {
        
    },
    
    setEvents: function () {
        
    },
    
    init : function () {
        console.log('init calcu flujo.');
        this.$display = $('article .calculator .display-text');
        this.displayContet = '';
    }
};

$(function () {
    CalcuFlujo.init();
});