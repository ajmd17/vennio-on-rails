import React from 'react';
import { randRange, lerp, drawImageCover } from './util'

class Blob {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;

        this.initialX = x;
        this.initialY = y;
        this.time = randRange(70, 90);
        this.angle = Math.random() * 2 * Math.PI;
        this.rotationRadius = 4.0 + Math.random() * 2.0;
        this.increment = (0.01 + Math.random() * 0.025) * Math.sign(Math.random() - 0.5);
    }

    update(canvas) {
        this.angle += this.increment;
        
        this.x = this.initialX + (this.rotationRadius * Math.cos(this.angle) / (canvas.width || 1));
        this.y = this.initialY + (this.rotationRadius * Math.sin(this.angle) / (canvas.height || 1));
    
        if (this.time <= 0) {
            this.time = randRange(70, 90);
            this.increment = (0.01 + Math.random() * 0.025) * Math.sign(Math.random() - 0.5);
        }

        if (this.angle >= Math.PI * 2) {
            this.angle = 0;
        }

        this.time--;
    }

    draw(canvas, context, offset) {
        context.beginPath();
        context.arc(this.x * canvas.width + offset.x,
            this.y * canvas.height + offset.y,
            canvas.width > 600 ? (this.radius * 1.4) : (this.radius * (canvas.width / 600)),
            0, 2 * Math.PI);
        context.fillStyle = this.color;
        context.fill();
        context.strokeStyle = this.color;
        context.stroke();
    }
}

class Canvas extends React.Component {
    constructor(props) {
        super(props);

        this.backgroundImage = new Image();
        this.backgroundImage.src = "img/background-4.png";
        this.parallaxOffset = { x: 0, y: 0 };
        this.parallaxOffsetDest = { x: 0, y: 0 };
        this.lastMouse = null;
        this.timer = 0;
        this.blobs = [
            new Blob(0.77, 0.27, 60, "#33A059"),
            new Blob(0.1, 0.55, 55, "#914A78"),
            new Blob(0.88, 0.8, 70, "#EC514B"),
            new Blob(0.2, 0.24, 34, "#409EEC"),
            new Blob(0.16, 0.85, 50, "#E6E273")
        ];
    }

    handleClick(e) {
        console.log(e);
    }

    handleMouseMove(e) {
        this.parallaxOffsetDest.x = Math.sign(e.clientX - this.canvas.width / 2) * 20;
        this.parallaxOffsetDest.y = Math.sign(e.clientY - this.canvas.height / 2) * 20;
    }

    updateDimensions() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.renderCanvas(this.canvas, true);
    }

    renderCanvas(canvas, resizeEvent) {
        let context = canvas.getContext("2d");

        drawImageCover(canvas, context, this.backgroundImage);

        if (this.props.isLandingPage) {
            /*if (!resizeEvent) {
                this.parallaxOffset.x = lerp(this.parallaxOffset.x, this.parallaxOffsetDest.x, 0.01);
                this.parallaxOffset.y = lerp(this.parallaxOffset.y, this.parallaxOffsetDest.y, 0.01);
            }

            for (let i = 0; i < this.blobs.length; i++) {
                if (!resizeEvent) {
                    this.blobs[i].update(canvas);
                }
                this.blobs[i].draw(canvas, context, this.parallaxOffset);
            }
            */
            if (!resizeEvent) {
                window.setTimeout(this.renderCanvas.bind(this, canvas, false), 45);
            }
        } else {

        }
    }

    componentDidMount() {
        this.updateDimensions();
        this.renderCanvas(this.canvas, false);

        window.addEventListener("resize", this.updateDimensions.bind(this));
        document.addEventListener("mousemove", this.handleMouseMove.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
        document.removeEventListener("mousemove", this.handleMouseMove.bind(this));
    }

    render() {
        return (
            <div className="main-canvas">
                <canvas ref={(canvas) => { this.canvas = canvas; }} onClick={this.handleClick}>
                    Your browser does not support the HTML5 canvas - It may be outdated.
                </canvas>
            </div>
        );
    }
}

export default Canvas;