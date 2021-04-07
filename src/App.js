import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import { PageHeader } from "./components/PageHeader";
import { SiteNav } from "./components/SiteNav";
import { LoginForm } from "./components/LoginForm";

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
                            <h2>Check Please</h2>
                            <p>example not created yet</p>
                        </Route>
                    </Switch>
                </main>
                <SiteNav />
            </Router>
        </div>
    );
}

export default App;
