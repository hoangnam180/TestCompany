import "./App.css";
import LayoutDefault from "./features/SamMarket/components/LayoutDefault";
import ProductDetail from "./features/SamMarket/Page/DetailProduct";

function App() {
  return (
    <div className={`App`}>
      <LayoutDefault>
        <ProductDetail />
      </LayoutDefault>
      {/* <Header />
      {loading || loadingPage ? (
        <div className="example">
          <Spin />
        </div>
      ) : (
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={<Page data={data} />}
              />
            );
          })}
        </Routes>
      )}
      <Footer /> */}
    </div>
  );
}

export default App;
