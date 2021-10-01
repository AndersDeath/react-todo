export class IdGenClass {
    private id = 0;

    get() {
        ++this.id;
        return this.id;
    }

    current() {
        return this.id;
    }

}

const idGen = new IdGenClass();

export { idGen };