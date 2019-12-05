import test from "ava"
import isPunycode from "."

test("main", (t) => {
    t.true(isPunycode("xn--tiq49xqyj"))
    t.false(isPunycode("notpunycode"))
})
