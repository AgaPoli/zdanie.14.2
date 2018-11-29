/*Wybieramy za pomocą selektora wszystkie elementy <span>. Następnie korzystamy z poznanej metody .each(). Wewnątrz metody podajemy funkcję przyjmującą dwa argumenty: index orazelement.*/
$(function() {
	var span = $('span');
	span.each(function(index, element) {
		/*Teraz musimy sprawdzić, czy element jest parzysty. W tym celu korzystamy z operatora if, który sprawdza, czy reszta z dzielenia indeksu przez 2 jest równa 0. Jeżeli tak, wybieramy ten element i za pomocą metody .css() ustalamy kolor czcionki na czerwony.*/
		/* można to też wykonać w prostszy sposób: $('span:even').css('color', 'red');*/
		if (index % 2 == 0) {
			$(element).css('color', 'red');
		}
	});
	/*dodajmy do każdego z paragrafów przycisk z atrybutem data-tmp równym indeksowi przycisku. Ponownie korzystamy w tym celu z metody .each. Wybieramy najpierw wszystkie akapity ($('p')), a następnie za pomocą metody each() przekazujemy je funkcji.
	Argumenty, podobnie jak poprzednio, to index oraz element.*/
	var paragraphs = $('p');
	paragraphs.each(function(index, element) {
		var button = '<button class="btn" data-tmp="' + index + '">Click me</button>';
		// Wewnątrz funkcji wybieramy element, na którym jesteśmy ($(element)), a następnie za pomocą metody append() dodajemy do niej przycisk.
		$(element).append(button);
	});
	/**/
	$('button').click(function() {
		alert($(this).attr('data-tmp'));
	});
});