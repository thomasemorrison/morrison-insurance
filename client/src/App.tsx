import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, useLocation } from "wouter";
import { useEffect, lazy, Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Eagerly load the home page (above-the-fold critical path)
import Home from "./pages/Home";

// Lazy-load all other pages — they only download when the user navigates to them
const About = lazy(() => import("./pages/About"));
const AutoInsurance = lazy(() => import("./pages/AutoInsurance"));
const HomeInsurance = lazy(() => import("./pages/HomeInsurance"));
const BusinessInsurance = lazy(() => import("./pages/BusinessInsurance"));
const FarmRanchInsurance = lazy(() => import("./pages/FarmRanchInsurance"));
const Contact = lazy(() => import("./pages/Contact"));
const Resources = lazy(() => import("./pages/Resources"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ArticleHomeownersInsuranceCover = lazy(() => import("./pages/articles/ArticleHomeownersInsuranceCover"));
const ArticleAutoInsuranceRequirements = lazy(() => import("./pages/articles/ArticleAutoInsuranceRequirements"));
const ArticleFarmVsHomeowners = lazy(() => import("./pages/articles/ArticleFarmVsHomeowners"));
const ArticleFloodDamage = lazy(() => import("./pages/articles/ArticleFloodDamage"));
const ArticleUninsuredDriver = lazy(() => import("./pages/articles/ArticleUninsuredDriver"));
const ArticleSmallBusinessCoverage = lazy(() => import("./pages/articles/ArticleSmallBusinessCoverage"));
const ArticleIndependentVsCaptive = lazy(() => import("./pages/articles/ArticleIndependentVsCaptive"));
const ArticleHowToFileClaim = lazy(() => import("./pages/articles/ArticleHowToFileClaim"));

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

// Minimal fallback — invisible, no layout shift
function PageFallback() {
  return <div style={{ minHeight: "100vh" }} />;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageFallback />}>
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
          <Route path="/404" component={() => <Layout><NotFound /></Layout>} />
          <Route component={() => <Layout><NotFound /></Layout>} />
        </Switch>
      </Suspense>
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
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
