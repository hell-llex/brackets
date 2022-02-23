

const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

function check(str, bra) {
  let stack = [] 
  bra = new Map(bra);
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
check(')(())()', config1) 