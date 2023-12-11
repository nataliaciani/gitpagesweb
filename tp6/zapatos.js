class Zapatos {
  constructor() { //declaro las propiedades/variables y les asigno valor
    this.size= random(38, 80);
    this.x= random(this.size, width -this.size);
    this.y= random(100, height -this.size-100);
  }
  dibujar(imgArray) {
    this.x =constrain(this.x, this.size, width - this.size);
    this.y=constrain(this.y, this.size, height - this.size-80);
    image(imgArray[16], this.x, this.y, this.size, this.size);
  }
}
