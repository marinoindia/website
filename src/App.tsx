import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
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
import PremadeSlingsPage from "./pages/PremadeSlingsPage";
import BlogPage from "./pages/BlogPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductVariantPage from "./pages/ProductVariantPage";
import { Analytics } from "@/components/Analytics";
import { GoatCounter } from "@/components/GoatCounter";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import CopyrightProtection from "@/components/CopyrightProtection";

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

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* Use Vite's BASE_URL so routing matches the deployed base path */}
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <CopyrightProtection />
          <GitHubPagesRedirect />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/our-people" element={<OurPeoplePage />} />
            <Route path="/premade-slings" element={<PremadeSlingsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/product/:productId" element={<ProductDetailPage />} />
            <Route path="/variant/:variantId" element={<ProductVariantPage />} />
            <Route path="/products/wire-rope-slings" element={<ProductDetailPage />} />
            <Route path="/products/chain-slings" element={<ProductDetailPage />} />
            <Route path="/products/shackles" element={<ProductDetailPage />} />
            <Route path="/products/hooks" element={<ProductDetailPage />} />
            <Route path="/products/turnbuckles" element={<ProductDetailPage />} />
            <Route path="/products/pulleys-blocks" element={<ProductDetailPage />} />
            <Route path="/products/wire-rope-accessories" element={<ProductDetailPage />} />
            <Route path="/analytics" element={<AnalyticsDashboard />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Analytics />
          <GoatCounter />
          <GoogleAnalytics />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
