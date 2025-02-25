document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.button');
    var display = document.getElementById('display');
    
    var expression = '';

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var value = this.textContent;

            if (value === 'C') {
                expression = '';
                display.textContent = '';
            } else if (value === '&larr;') {
                expression = expression.substring(0, expression.length - 1);
                display.textContent = expression;
            } else if (value === '=') {
                try {
                    expression = eval(expression);
                    display.textContent = expression;
                } catch (e) {
                    display.textContent = 'Error';
                    expression = '';
                }
            } else {
                expression += value;
                display.textContent = expression;
            }
        });
    });
});
