class Boton {
  constructor() {
    this.tamanioaumentado=103;
    this.radio=20;
    this.botoninicio=true;
    //this.m= 500;
    //this.b=300;
  }
  dibujar(imgArray, m, b, estado) {
    image(imgArray, m, b);
    if (estado !== 6 && dist(mouseX, mouseY, 530, 340)<=this.radio) { //menos en el estado 6, si posiciono el mouse en la imagen la agranda
      image(imgArray, 496, 292, this.tamanioaumentado, this.tamanioaumentado);
    }
  }

  inicio (x, y, r) {
    return dist (mouseX, mouseY, x, y) <=r;
  }
}
