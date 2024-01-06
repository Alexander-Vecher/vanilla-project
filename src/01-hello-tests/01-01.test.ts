import {sum} from "./01-01";

test("sum", ()=>{
  const a=1;
    const b=2;

    const result = sum(a,b)

    expect(result).toBe(3)
})