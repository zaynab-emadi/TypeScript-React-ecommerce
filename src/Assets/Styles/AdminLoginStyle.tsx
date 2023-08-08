import { styled} from "@mui/material/styles";

export const LoginBox = styled('div')(({theme}) => ({
    borderRadius: theme.shape.borderRadius,
    width : '70%',
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center'
}));