import { Subject } from 'rxjs';

// R=> [0, 255], G=> [0, 255], B=> [0, 255]
export type RGBColor = [number, number, number];
export type HEXColor = string;
export class Color {
    r: number;
    g: number;
    b: number;

    get hex(): string {
        return `#${this.r.toString(16).padStart(2, '0')}${this.g.toString(16).padStart(2, '0')}${this.b.toString(16).padStart(2, '0')}`.toUpperCase();
    }
    static fromRGB(rgb: RGBColor) {
        const c = new Color();
        c.r = rgb[0];
        c.g = rgb[1];
        c.b = rgb[2];
        return c;
    }

    static fromHex(hexStr: HEXColor) {
        const c = new Color();
        c.r = parseInt(hexStr.slice(1, 3), 16);
        c.g = parseInt(hexStr.slice(3, 5), 16);
        c.b = parseInt(hexStr.slice(5, 7), 16);
        return c;
    }

    length(): number {
        return Math.pow(this.r * this.r + this.g * this.g + this.b * this.b, 0.5);
    }

    distanceTo(color: Color): number {
        return (color.r * this.r + color.g * this.g + color.b * this.b) / (this.length() * color.length());
    }

    get brightness(): number {
        return (0.2126 * this.r + 0.7152 * this.g + 0.0722 * this.b) / 255;
    }

    darken(ratio: number): Color {
        const c = new Color();
        c.r = Math.floor(this.r * ratio);
        c.g = Math.floor(this.g * ratio);
        c.b = Math.floor(this.b * ratio);
        return c;
    }

    copyFrom(color: Color) {
        this.r = color.r;
        this.g = color.g;
        this.b = color.b;
    }
}

export class ColorInfo {
    name: string;
    subname: string;
    color: Color;
    constructor(name: string, subname: string, color: string) {
        this.name = name;
        this.subname = subname;
        this.color = Color.fromHex(color);
    }

    copyFrom(colorInfo: ColorInfo) {
        this.name = colorInfo.name;
        this.subname = colorInfo.subname;
        this.color = colorInfo.color;
    }
}

export type ColorSet = 'cn' | 'jp' | 'uk' | 'us' | 'fr';

export const colorSetName = new Subject<ColorSet>();
