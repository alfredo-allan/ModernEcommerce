import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext"; // ✅ Import do AuthProvider

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { BagSideMenu } from "./components/BagSideMenu";

import { HomePage } from "./pages/HomePage";
import { CategoryPage } from "./pages/CategoryPage";
import { ProductPage } from "./pages/ProductPage";
import NotFound from "@/pages/not-found";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage"; // importe sua página
import AboutUs from "./pages/AboutUs";
import ExchangePolicy from "./pages/ExchangePolicy";
import ShippingAndDelivery from "./pages/ShippingAndDelivery";
import Contact from "./pages/Contact";


function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/auth" component={AuthPage} />
      <Route path="/checkout" component={CheckoutPage} /> {/* Rota do Checkout */}
      <Route path="/produto/:id" component={ProductPage} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/exchange-policy" component={ExchangePolicy} />
      <Route path="/shipping-and-delivery" component={ShippingAndDelivery} />
      <Route path="/contact" component={Contact} />
      <Route path="/:category" component={CategoryPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <CartProvider>
            <AuthProvider> {/* ✅ Contexto de autenticação aqui */}
              <div className="min-h-screen bg-background text-foreground">
                <Navbar />
                <Router />
                <Footer />
                <BagSideMenu />
              </div>
              <Toaster />
            </AuthProvider>
          </CartProvider>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
