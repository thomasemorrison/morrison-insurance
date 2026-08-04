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
import ArticleHuntingLease from "./pages/articles/ArticleHuntingLease";
import ArticleAutoInsuranceCenterTx from "./pages/articles/ArticleAutoInsuranceCenterTx";
import ArticleCarInsuranceQuotesCenterTx from "./pages/articles/ArticleCarInsuranceQuotesCenterTx";
import ArticleCarInsuranceAgentsCenterTx from "./pages/articles/ArticleCarInsuranceAgentsCenterTx";
import ArticleAllstateCaptiveAgency from "./pages/articles/ArticleAllstateCaptiveAgency";
import ArticleCarInsuranceCompaniesCenterTx from "./pages/articles/ArticleCarInsuranceCompaniesCenterTx";
import ArticleFileClaimTexasAdjuster from "./pages/articles/ArticleFileClaimTexasAdjuster";
import ArticleScrewwormTexas from "./pages/articles/ArticleScrewwormTexas";
import ArticleStormDamageEastTexas from "./pages/articles/ArticleStormDamageEastTexas";
import ArticleTeenDriver from "./pages/articles/ArticleTeenDriver";
import ArticleMorrisonAgency from "./pages/articles/ArticleMorrisonAgency";
import ArticleFarmersCaptive from "./pages/articles/ArticleFarmersCaptive";
import ArticleRentersCost from "./pages/articles/ArticleRentersCost";
import ArticleHurricaneSeasonEastTexas from "./pages/articles/ArticleHurricaneSeasonEastTexas";
import CookieConsent from "./components/CookieConsent";
import MorrisonFamilyHistory from "./pages/MorrisonFamilyHistory";

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
  // make sure to consider if you need authentication for certain routes
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
      <Route path="/resources/hunting-lease-liability-insurance-east-texas" component={() => <Layout><ArticleHuntingLease /></Layout>} />
      <Route path="/resources/auto-insurance-center-tx" component={() => <Layout><ArticleAutoInsuranceCenterTx /></Layout>} />
      <Route path="/resources/car-insurance-quotes-center-tx" component={() => <Layout><ArticleCarInsuranceQuotesCenterTx /></Layout>} />
      <Route path="/resources/car-insurance-agents-center-tx" component={() => <Layout><ArticleCarInsuranceAgentsCenterTx /></Layout>} />
      <Route path="/resources/is-allstate-captive-agency-independent-agent-difference" component={() => <Layout><ArticleAllstateCaptiveAgency /></Layout>} />
      <Route path="/resources/car-insurance-companies-center-tx" component={() => <Layout><ArticleCarInsuranceCompaniesCenterTx /></Layout>} />
      <Route path="/resources/how-to-file-claim-texas-adjuster" component={() => <Layout><ArticleFileClaimTexasAdjuster /></Layout>} />
      <Route path="/resources/new-world-screwworm-texas-livestock-farm-insurance" component={() => <Layout><ArticleScrewwormTexas /></Layout>} />
      <Route path="/resources/storm-damage-home-east-texas" component={() => <Layout><ArticleStormDamageEastTexas /></Layout>} />
      <Route path="/resources/adding-teen-driver-insurance-texas" component={() => <Layout><ArticleTeenDriver /></Layout>} />
      <Route path="/resources/morrison-insurance-agency-center-tx" component={() => <Layout><ArticleMorrisonAgency /></Layout>} />
      <Route path="/resources/are-farmers-agents-captive-east-texas" component={() => <Layout><ArticleFarmersCaptive /></Layout>} />
      <Route path="/resources/average-cost-renters-insurance-texas" component={() => <Layout><ArticleRentersCost /></Layout>} />
      <Route path="/resources/hurricane-season-insurance-checklist-east-texas" component={() => <Layout><ArticleHurricaneSeasonEastTexas /></Layout>} />
      <Route path="/morrison-family-history" component={() => <Layout><MorrisonFamilyHistory /></Layout>} />
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
