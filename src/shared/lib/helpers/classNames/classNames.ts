export type TMods = Record<string, boolean | string | undefined>;

export const classNames = (
    cls: string,
    mods: TMods = {},
    additional: Array<string | undefined> = [],
): string => {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([_, value]) => !!value)
            .map(([className]) => className),
    ].join(' ');
};
