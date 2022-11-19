export default function setRootStyle(variable: string, value: string) {
  document.documentElement.style.setProperty(variable, value)
}
