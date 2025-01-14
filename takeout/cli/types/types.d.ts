import { TamaguiOptions } from '@tamagui/static';
export declare type UserOptions = {
    root?: string;
    host?: string;
    tsconfigPath?: string;
    tamaguiOptions: Partial<TamaguiOptions>;
};
export declare type ResolvedOptions = {
    root: string;
    host?: string;
    mode: 'development' | 'production';
    tsconfigPath: string;
    tamaguiOptions: TamaguiOptions;
    paths: {
        dotDir: string;
        conf: string;
        types: string;
    };
};
//# sourceMappingURL=types.d.ts.map