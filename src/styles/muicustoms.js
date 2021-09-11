import { styled } from "@material-ui/core";

function family(value) {
    switch (value) {
        case '1':
            return 'Lateef !important'
        case '2':
            return 'Amiri !important'
        case '3':
            return 'Tajawal !important'
        default:
            return 'Lateef !important'
    }
}
const ArabicTypo = styled('div')(({ font }) => ({
    fontFamily: family(font)
}))

export { ArabicTypo }