declare module 'l-print' {
  type Core = {
    //Colors
    blue(): Core;
    black(): Core;
    cyan(): Core;
    green(): Core;
    magneta(): Core;
    red(): Core;
    white(): Core;
    yellow(): Core;
    //bg colors
    bgBlue(): Core;
    bgBlack(): Core;
    bgCyan(): Core;
    bgGreen(): Core;
    bgMagneta(): Core;
    bgRed(): Core;
    bgWhite(): Core;
    bgYellow(): Core;
    //Effects
    bright(): Core;
    dim(): Core;
    underscore(): Core;
    //
    pad(space: number, text?: string): Core;
    // lvl
    lvl0(): Core;
    lvl1(): Core;
    lvl2(): Core;
    lvl3(): Core;
    lvl4(): Core;
    //
    date(): Core;
    text(text: string, extraSigns?: string[]): Core;
    // pipe(): Core;
    log(): void;
  }
  function l(text: string): Core;
  export default l;
}
