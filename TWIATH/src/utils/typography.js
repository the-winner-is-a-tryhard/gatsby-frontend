import Typography from "typography"
import githubTheme from "typography-theme-github"

githubTheme.overrideThemeStyles = () => {
    return {
        "a.gatsby-resp-image-link": {
            boxShadow: `none`,
        },
    }
}

const typography = new Typography(githubTheme)

typography.injectStyles()

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
