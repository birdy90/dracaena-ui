function shuffleArray(array: []) {
  type ArrItem = { value: any, sort: number };

  return array
    .map(t => ({ value: t, sort: Math.random() }))
    .sort((a: ArrItem, b: ArrItem) => a.sort - b.sort)
    .map(t => t.value);
}

function arrayClosest(array: [], target: number) {
  return array.reduce(function (acc, t) {
    return Math.abs(t - target) < Math.abs(acc - target) ? t : acc;
  });
}

const randomString = (length: number = 8): string => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}

function throttle(func: Function, ms: number): Function {
  let isThrottled = false;
  let savedArgs: any;
  let savedThis: any;

  function wrapper(this: unknown) {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);

    isThrottled = true;

    setTimeout(function() {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

const calculateScrollBarWidth = () => {
  let body = document.body;
  body.style.overflow = 'hidden';
  let width = body.clientWidth;
  body.style.overflow = 'scroll';
  width -= body.clientWidth;
  if (!width) width = body.offsetWidth - body.clientWidth;
  body.style.overflow = '';
  return width;
}

export {
  shuffleArray,
  arrayClosest,
  randomString,
  calculateScrollBarWidth,
  throttle,
}
