import { IProvidersProps } from "./@Types";
import { UserProvider } from "./UserContext";

const Providers = ({ children }: IProvidersProps) => {
    return <UserProvider>{children}</UserProvider>;
};

export default Providers;
