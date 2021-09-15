import { newArrayIntQueue } from "../src/arrayqueue";
import { newLinkedListIntQueue } from "../src/linkedlistqueue.js";

// pick one queue implementation, can run test easily for both, due to subtype polymorphism
// let createQueue = newLinkedListIntQueue
let createQueue = newArrayIntQueue

// simple test
test("newly created list should be empty", () => {
    expect(createQueue().isEmpty()).toBeTruthy()
})

let param = [5, 10, 1000000]
// parameterized test, apply to each value of the parameter
test.each(param)("enqueued number %d can be dequeued", (nr) => {
    const queue = createQueue()
    queue.enqueue(nr)
    expect(queue.peek()).toBe(nr)
})

// can nest tests with shared descriptions for better readability
describe("queue length", ()=> {
    test("1 entry", ()=>{
        const queue = createQueue()
        queue.enqueue(5)
        expect(queue.size()).toBe(1)
    })

    test("11 entries", ()=>{
        const queue = createQueue()
        for (let i =0;i<11;i++)
            queue.enqueue(i)
        expect(queue.size()).toBe(11)
    })
})
