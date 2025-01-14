import { Check, Copy } from '@tamagui/lucide-icons'
import { memo } from 'react'
import { Button, Paragraph, Spacer, TooltipSimple, XStack } from 'tamagui'

import { useClipboard } from '../lib/useClipboard'

export const InstallInput = memo(() => {
  const installScript = `npm create tamagui-app@latest`
  const { onCopy, hasCopied } = useClipboard(installScript)

  return (
    <XStack
      borderWidth={1}
      borderColor="$borderColor"
      px="$7"
      pl="$6"
      height={48}
      ai="center"
      als="center"
      elevation="$2"
      br="$10"
      bc="$background"
      hoverStyle={{
        bc: '$background',
      }}
    >
      <Paragraph ta="center" size="$4" fontWeight="500" fontFamily="$mono" $sm={{ size: '$3' }}>
        {installScript}
      </Paragraph>
      <Spacer size="$6" />
      <TooltipSimple label={hasCopied ? 'Copied' : 'Copy to clipboard'}>
        <Button
          accessibilityLabel={installScript}
          borderRadius="$8"
          mr="$-7"
          x={-1}
          // TODO broken in latest
          icon={
            hasCopied ? (
              <Check size={16} color="var(--colorHover)" />
            ) : (
              <Copy size={16} color="var(--colorHover)" />
            )
          }
          aria-label="Copy the install snippet to Clipboard"
          onPress={onCopy}
        />
      </TooltipSimple>
    </XStack>
  )
})
