function shuffleArray(arr: any[]): any[] {
  type ArrItem = { value: any, sort: number };

  return arr
    .map((t: any): ArrItem => ({ value: t, sort: Math.random() }))
    .sort((a: ArrItem, b: ArrItem) => a.sort - b.sort)
    .map((t: ArrItem): any => t.value);
}

function arrayClosest(array: any[], target: number) {
  return array.reduce((acc, t) => (Math.abs(t - target) < Math.abs(acc - target) ? t : acc));
}

const randomString = (length: number = 8): string => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
};

function throttle(func: Function, ms: number): Function {
  let isThrottled = false;
  let savedArgs: any;
  let savedThis: any;

  function wrapper(this: unknown, ...args: any[]) {
    if (isThrottled) {
      savedArgs = args;
      savedThis = this;
      return;
    }

    func.apply(this, savedArgs);

    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = null;
        savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

const calculateScrollBarWidth = (): number => {
  const { body } = document;
  body.style.overflow = 'hidden';
  let width = body.clientWidth;
  body.style.overflow = 'scroll';
  width -= body.clientWidth;
  if (!width) width = body.offsetWidth - body.clientWidth;
  body.style.overflow = '';
  return width;
};

export {
  shuffleArray,
  arrayClosest,
  randomString,
  calculateScrollBarWidth,
  throttle,
};
