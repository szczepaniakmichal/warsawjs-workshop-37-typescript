interface X {
    plus5(x: number): number;
}

class Y {
    minus5(x: number): number {
        return x - 5;
    }
    plus5(x: number): number {
        return x + 5;
    }
}

const o = new Y();

function ff(x: X) {
    console.log(x.plus5(10));
}

ff(o);