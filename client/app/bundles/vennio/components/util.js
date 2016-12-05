function randRange(min, max) {
    return Math.random() * (max - min) + min;
}

function lerp(a, b, amt) {
    return (1 - amt) * a + amt * b;
}

function drawImageCover(canvas, context, img) {
    let offsetX = 0.5;
    let offsetY = 0.5;
    let w = canvas.width;
    let h = canvas.height;
    let x = 0;
    let y = 0;
    let iw = img.width,
        ih = img.height,
        r = Math.min(w / iw, h / ih),
        nw = iw * r,   // new prop. width
        nh = ih * r,   // new prop. height
        cx, cy, cw, ch, ar = 1;

    // decide which gap to fill    
    if (nw < w) {
        ar = w / nw;
    }

    if (nh < h) {
        ar = h / nh;
    }

    nw *= ar;
    nh *= ar;

    cw = iw / (nw / w);
    ch = ih / (nh / h);
    cx = (iw - cw) * offsetX;
    cy = (ih - ch) * offsetY;

    if (cx < 0) {
        cx = 0;
    }
    if (cy < 0) {
        cy = 0;
    }
    if (cw > iw) {
        cw = iw;
    }
    if (ch > ih) {
        ch = ih;
    }

    // fill image in the rectangle
    context.drawImage(img, cx, cy, cw, ch, x, y, w, h);
}

export { randRange, lerp, drawImageCover };