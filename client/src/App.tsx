import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import AutoInsurance from "./pages/AutoInsurance";
import HomeInsurance from "./pages/HomeInsurance";
import BusinessInsurance from "./pages/BusinessInsurance";
import FarmRanchInsurance from "./pages/FarmRanchInsurance";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <main style={{ flex: 1, paddingBottom: "4rem" }} className="lg:pb-0">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={() => <Layout><Home /></Layout>} />
      <Route path="/about" component={() => <Layout><About /></Layout>} />
      <Route path="/auto-insurance" component={() => <Layout><AutoInsurance /></Layout>} />
      <Route path="/home-insurance" component={() => <Layout><HomeInsurance /></Layout>} />
      <Route path="/business-insurance" component={() => <Layout><BusinessInsurance /></Layout>} />
      <Route path="/farm-ranch-insurance" component={() => <Layout><FarmRanchInsurance /></Layout>} />
      <Route path="/contact" component={() => <Layout><Contact /></Layout>} />
      <Route path="/resources" component={() => <Layout><Resources /></Layout>} />
      <Route path="/privacy-policy" component={() => <Layout><PrivacyPolicy /></Layout>} />
      <Route path="/404" component={() => <Layout><NotFound /></Layout>} />
      <Route component={() => <Layout><NotFound /></Layout>} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
