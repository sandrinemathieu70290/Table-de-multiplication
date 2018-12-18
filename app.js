var a;
var b;
document.write("<div class='container'>");
document.write("<h1>table de multiplication</h1> ");
document.write("<div class='row'>");


for (var a = 1; a <= 10; a++)
{
    document.write( "<div class='table col-2'>" + "<h3>table de " + a +"</h3>");
        for (var b = 1; b <= 10; b++)
        {
            document.write( a + ' * '+ b + ' = ' + (a*b) + '<br />');    
        }
    document.write("</div>");    
}

document.write("</div>");
document.write("</div>");




