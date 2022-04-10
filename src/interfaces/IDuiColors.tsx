interface IAccent {
  accent?: boolean,
}

interface ISecondary {
  secondary?: boolean,
}

interface IAlert {
  alert?: boolean,
}

type IDuiColors = IAccent & ISecondary & IAlert;

export default IDuiColors;
