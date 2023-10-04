export default interface Usecase<E, S> {
    execute(input:E): Promise<S>
}