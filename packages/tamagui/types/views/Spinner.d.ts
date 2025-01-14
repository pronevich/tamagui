import { ColorTokens, ThemeTokens } from '@tamagui/core';
import { YStackProps } from '@tamagui/stacks';
import * as React from 'react';
export declare type SpinnerProps = Omit<YStackProps, 'children'> & {
    size?: 'small' | 'large';
    color?: (ColorTokens | ThemeTokens | (string & {})) | null;
};
export declare const Spinner: React.ForwardRefExoticComponent<SpinnerProps & React.RefAttributes<any>>;
//# sourceMappingURL=Spinner.d.ts.map