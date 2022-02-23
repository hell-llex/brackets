module.exports = function check(str, bracketsConfig) {
  let stack = [] 
  bra = new Map(bracketsConfig);
  for (let i = 0; i < str.length; i++) {
    let x = str[i]
    if (bra.has(str[0])) {
      let top = stack[stack.length - 1]
      x === bra.get(top) ? stack.pop() : stack.push(x)
    } else if(stack.length === 0) {
      return false
    }
  }
  return stack.length === 0
}
