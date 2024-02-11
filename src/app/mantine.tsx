// import Page from './page';

import { MantineProvider, MantineThemeOverride } from '@mantine/core';

import { theme as baseTheme } from '../utils/theme'

export default function RootStyleRegistry({children}: {children: React.ReactNode;}) {
  const theme: Partial<MantineThemeOverride> = baseTheme;

  return (
    <MantineProvider theme={theme}>
      {children}
    </MantineProvider>
  );
}
