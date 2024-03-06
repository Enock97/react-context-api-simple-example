import { MyContext } from "../App";

export default function Header() {

    const context = createContext(MyContext);

    return <h1>{ context.appName }</h1>
}
