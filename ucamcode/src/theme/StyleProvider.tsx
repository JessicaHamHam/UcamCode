import { ChakraProvider } from "@chakra-ui/react"
import { ThemeProvider } from "next-themes"
import customTheme from "./theme.ts"

export function StyleProvider(props: { children: React.ReactNode }) {
    return (
        <ChakraProvider value={customTheme}>
            <ThemeProvider attribute="class" disableTransitionOnChange>
                {props.children}
            </ThemeProvider>
        </ChakraProvider>
    )
}