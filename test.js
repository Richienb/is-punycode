import test from "ava"
import isPunycode from "."

test("main", (t) => {
    t.true(isPunycode("xn--tiq49xqyj"))
    t.true(isPunycode("XN--TIQ49XQYJ"))
    t.false(isPunycode("notpunycode"))
})
