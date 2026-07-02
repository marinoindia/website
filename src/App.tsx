import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigate, Navigate, useParams } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AnalyticsDashboard from "./pages/AnalyticsDashboard";
import ProductsPage from "./pages/ProductsPage";
import MediaPage from "./pages/MediaPage";
import ContactPage from "./pages/ContactPage";
import ClientsPage from "./pages/ClientsPage";
import OurPeoplePage from "./pages/OurPeoplePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductVariantPage from "./pages/ProductVariantPage";
import CityPage from "./pages/CityPage";
import PremadeSlingsPage from "./pages/PremadeSlingsPage";
import WebshopPage from "./pages/WebshopPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";
import RefundPolicyPage from "./pages/RefundPolicyPage";
import ShippingPolicyPage from "./pages/ShippingPolicyPage";
import { CartProvider } from "@/contexts/CartContext";
import { Analytics } from "@/components/Analytics";
import { GoatCounter } from "@/components/GoatCounter";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const queryClient = new QueryClient();

// Component to handle GitHub Pages 404.html redirect
const GitHubPagesRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Handle GitHub Pages 404.html redirect pattern
    // When GitHub Pages serves 404.html, it adds a query parameter like ?/path
    const searchParams = new URLSearchParams(location.search);
    const redirectPath = searchParams.get('/');
    
    if (redirectPath) {
      // Decode the path and navigate to it
      const decodedPath = redirectPath.replace(/~and~/g, '&').replace(/~slash~/g, '/');
      if (decodedPath && decodedPath !== location.pathname) {
        navigate(decodedPath, { replace: true });
      }
    }
  }, [location.search, location.pathname, navigate]);

  return null;
};

// Redirect /products/:slug → /product/:slug (canonical pattern).
// Keeps inbound links from llms.txt, sitemaps and external sites working.
const ProductsSlugRedirect = () => {
  const { slug } = useParams<{ slug: string }>();
  return <Navigate to={`/product/${slug}/`} replace />;
};

// Scroll to top of page on route change. Skipped when the URL has a hash
// fragment so in-page anchor links (e.g. /#about, /#why-us) still scroll
// to the target element instead of being yanked back to the top.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [pathname, hash]);
  return null;
};

// NOTE: URLs use the trailing-slash form site-wide. GitHub Pages serves the
// prerendered pages as directory indexes and 301s /page -> /page/, so the
// slash form is the canonical one; do not add client-side slash rewrites.

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* Use Vite's BASE_URL so routing matches the deployed base path */}
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <CartProvider>
          <GitHubPagesRedirect />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/webshop" element={<WebshopPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/our-people" element={<OurPeoplePage />} />
            <Route path="/product/:productId" element={<ProductDetailPage />} />
            <Route path="/variant/:variantId" element={<ProductVariantPage />} />
            <Route path="/products/:slug" element={<ProductsSlugRedirect />} />
            <Route path="/premade-slings" element={<PremadeSlingsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/refund-policy" element={<RefundPolicyPage />} />
            <Route path="/shipping-policy" element={<ShippingPolicyPage />} />
            <Route path="/suppliers/:city" element={<CityPage />} />
            <Route path="/analytics" element={<AnalyticsDashboard />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Analytics />
          <GoatCounter />
          <GoogleAnalytics />
          </CartProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
