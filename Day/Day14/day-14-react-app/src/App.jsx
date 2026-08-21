import './App.css';
import ClickDemo from "./components/EventHandler1.jsx";
import FormDemo from "./components/EventHandler2.jsx";
import ActionButtonDemo from "./components/EventHandler3.jsx";
import SimpleList from "./components/ListAndKeys1.jsx";
import UserListHook from "./components/HookOne.jsx";
import ThemeProviderDemo from "./components/HookTwo.jsx";
import SimpleNameForm from "./components/Form1.jsx";
import SignupForm from "./components/Form2.jsx";
import ValidatedForm from "./components/Form3.jsx";
import GitHubProfile from "./components/GithubApi.jsx";

function App() {

  return (
    <>
    {/* <ClickDemo/>
    <FormDemo/>
    <ActionButtonDemo/>
    <SimpleList/>
    <UserListHook/> */}
    {/* <ThemeProviderDemo/> */}
    {/* <SimpleNameForm/>
    <SignupForm/> 
    <ValidatedForm/> */}

    <GitHubProfile username="rakeshdotkr"/>
    
    </>
  )
}

export default App;
