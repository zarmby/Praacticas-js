const mario = {
    peso : 95,
    estatura : 1.88,
    IMC : 0
}

const luigi = {
    peso : 85,
    estatura : 1.76,
    IMC : 0
}

marioMayorIMC = false;

mario.IMC = mario.peso / (mario.estatura * mario.estatura);
document.write("<p>IMC de Mario = " + mario.IMC.toFixed(2) + "</p> <br>");
luigi.IMC = luigi.peso / (luigi.estatura * luigi.estatura);
document.write("<p>IMC de Luigi = " + luigi.IMC.toFixed(2) + "</p> <br>");

marioMayorIMC = (mario.IMC > luigi.IMC) ? true : false;

(marioMayorIMC) ? document.write("<h2>Mario tiene mas IMC que Luiggi</h2>") : document.write("<h1>Luigi tiene mas IMC que Mario</h2>");
