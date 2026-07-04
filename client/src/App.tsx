import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
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
import ThankYou from "./pages/ThankYou";
import ArticleHomeownersInsuranceCover from "./pages/articles/ArticleHomeownersInsuranceCover";
import ArticleAutoInsuranceRequirements from "./pages/articles/ArticleAutoInsuranceRequirements";
import ArticleFarmVsHomeowners from "./pages/articles/ArticleFarmVsHomeowners";
import ArticleFloodDamage from "./pages/articles/ArticleFloodDamage";
import ArticleUninsuredDriver from "./pages/articles/ArticleUninsuredDriver";
import ArticleSmallBusinessCoverage from "./pages/articles/ArticleSmallBusinessCoverage";
import ArticleIndependentVsCaptive from "./pages/articles/ArticleIndependentVsCaptive";
import ArticleHowToFileClaim from "./pages/articles/ArticleHowToFileClaim";
import ArticleRates from "./pages/articles/ArticleRates";
import ArticleBoat from "./pages/articles/ArticleBoat";
import ArticleRenters from "./pages/articles/ArticleRenters";
import ArticleUmbrella from "./pages/articles/ArticleUmbrella";
import ArticleMobileHome from "./pages/articles/ArticleMobileHome";
import CookieConsent from "./components/CookieConsent";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

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
    <>
      <ScrollToTop />
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
      <Route path="/thank-you" component={() => <ThankYou />} />
      <Route path="/resources/what-does-homeowners-insurance-cover-texas" component={() => <Layout><ArticleHomeownersInsuranceCover /></Layout>} />
      <Route path="/resources/texas-auto-insurance-requirements" component={() => <Layout><ArticleAutoInsuranceRequirements /></Layout>} />
      <Route path="/resources/farm-insurance-vs-homeowners-insurance" component={() => <Layout><ArticleFarmVsHomeowners /></Layout>} />
      <Route path="/resources/does-homeowners-insurance-cover-flood-damage-texas" component={() => <Layout><ArticleFloodDamage /></Layout>} />
      <Route path="/resources/uninsured-driver-accident-texas" component={() => <Layout><ArticleUninsuredDriver /></Layout>} />
      <Route path="/resources/small-business-insurance-coverage-gaps" component={() => <Layout><ArticleSmallBusinessCoverage /></Layout>} />
      <Route path="/resources/independent-vs-captive-insurance-agents" component={() => <Layout><ArticleIndependentVsCaptive /></Layout>} />
      <Route path="/resources/how-to-file-insurance-claim-texas" component={() => <Layout><ArticleHowToFileClaim /></Layout>} />
      <Route path="/resources/why-is-homeowners-insurance-going-up-texas" component={() => <Layout><ArticleRates /></Layout>} />
      <Route path="/resources/boat-insurance-toledo-bend-texas" component={() => <Layout><ArticleBoat /></Layout>} />
      <Route path="/resources/renters-insurance-texas-myths" component={() => <Layout><ArticleRenters /></Layout>} />
      <Route path="/resources/umbrella-insurance-east-texas" component={() => <Layout><ArticleUmbrella /></Layout>} />
      <Route path="/resources/mobile-home-insurance-texas" component={() => <Layout><ArticleMobileHome /></Layout>} />
      <Route path="/404" component={() => <Layout><NotFound /></Layout>} />
      <Route component={() => <Layout><NotFound /></Layout>} />
    </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
          <CookieConsent />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
