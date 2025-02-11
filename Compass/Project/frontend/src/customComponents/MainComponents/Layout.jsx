import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import PageRoutes from "./PageRoutes";

export default function Layout() {
  return (
    <div className="bg-[#000000] min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Header />
        <div className="content min-h-[90vh] mt-5 mb-5">
          <PageRoutes />
        </div>
        <Footer />
      </div>
    </div>
  );
}
