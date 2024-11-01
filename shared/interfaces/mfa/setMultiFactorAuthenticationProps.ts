export interface SetMultiFactorAuthenticationProps {
    setAuthAppMfa: () => void;
    setSmsMfa: () => void;
    setEmailMfa: () => void;
    onSubmit: () => void;
}