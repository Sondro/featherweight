//
// FEATHERWEIGHT
// Flappy Bird JavaScript Code Golf
// http://girv.net/
//
// X = rendering context
// H = canvas height  = 640
// Y = magic constant = 20
//     pipe gap       = 160
//
// P = pipe x
// Q = pipe h
// R = 'random'
//
// A = player score
// B = player y
// C = player yv

X   = V.getContext('2d');
X.r = X.fillRect;

R = B = C = H = V.height = 640;

setInterval(function() {
    // player update
    R += B += (++C);

    // collision detection
    if (   B < 0
        || B > H
        || (Y > P && (B < Q || B > Q+140)) ) {
        P = B =  0;
        A = C = -1;
    }

    // move pipe left
    P -= 6;

    // reinitialise pipe if off left hand side of canvas
    if (P < 0) {
        P = 960;
        Q = R % 480;
        A++;
    }

    // render scene
    V.width = 960;

    X.r(P, 0    , Y, Q);
    X.r(P, Q+160, Y, H);

    X.r(Y, B, Y, Y);

    X.fillText(A, Y, Y);
}, Y = 20);
