import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import { PageHeader } from "./components/PageHeader";
import { SiteNav } from "./components/SiteNav";
import { LoginForm } from "./components/LoginForm";
import { OptionsForm } from "./components/OptionsForm";

function App() {
    return (
        <div className="App">
            <Router>
                <PageHeader />
                <main>
                    <Switch>
                        <Route path="/login">
                            <LoginForm />
                        </Route>
                        <Route path="/checks">
                            <OptionsForm />
                        </Route>
                    </Switch>
                </main>
                <SiteNav />
            </Router>
        </div>
    );
}

export default App;
