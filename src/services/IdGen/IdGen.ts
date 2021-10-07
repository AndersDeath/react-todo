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

const listIdGen = new IdGenClass();
const itemIdGen = new IdGenClass();

export { listIdGen, itemIdGen };