function getTriangleArea (a, h) {


function getTriangleArea (a, h) {

	if((a > 0)&&(h > 0)) {
	   return a*h/2;
	}
	
    console.log("Nieprawidłowe dane");
}

//main

console.log("To jest pierwszy wynik: " + getTriangleArea(6,10));

var triangle1Area = getTriangleArea(10,15);
var triangle2Area = getTriangleArea(11,16);
var triangle3Area = getTriangleArea(12,17);

console.log("Pierwsza zmienna to: " + triangle1Area);
console.log("Druga zmienna to: " + triangle2Area);
console.log("Trzecia zmienna to: " + triangle3Area);