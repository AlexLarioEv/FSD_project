
type TMods = Record<string, boolean | string>

export const classNames = (cls: string, mods:TMods = {}, additional: string[] = []): string => {
  return [
    cls, 
    ...additional, 
    ...Object.entries(mods).filter(
      ([_, value]) => !!value).map(
      ([className]) => className)].join(' ')
}
