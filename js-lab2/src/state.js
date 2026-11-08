// useState — from JS Lab 1, section 15, with its smarter setState. This lab's app is built on it.
// It's your own code: `npm run carry -- ../js-lab1` copies your js-lab1/src/s15-state.js
// over this file (section 01 of the lab doc). Until then, calling it throws "TODO".
//
//   const [getState, setState] = useState(initial, render);
//   setState(next) or setState((prev) => next) stores the new state and calls render(),
//   unless the new state is the SAME value (Object.is), in which case nothing happens.
export function useState(initial, onChange) {
 let state = initial;                 
  const getState = () => state;

  const setState = (update) => {
    const next = typeof update === "function" ? update(state) : update;
    if (Object.is(next, state)) return; 
    state = next;
    onChange?.();                     
  };

  return [getState, setState];
}
