class Circle {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.growing = true;
    }

    show() {
        stroke(255);
        // strokeWeight(2);
        noFill();
        ellipse(this.x, this.y, 2 * this.r, 2 * this.r);
    }

    edges() {
        return (this.x + this.r > width || this.x - this.r < 0 || this.y + this.r > height || this.y - this.r < 0);
    }

    grow() {
        if (this.growing)
            this.r += 0.5;
    }
};