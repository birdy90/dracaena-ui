interface IDuiLink {
  title: string,
  href: string,
  target?: string,
  links?: IDuiLink[],
}

export default IDuiLink;
