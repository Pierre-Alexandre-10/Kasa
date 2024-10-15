import Header from "../../components/Header/header";
import ErrorPage from "../../components/Error/error";
import Footer from "../../components/Footer/footer";

function Error() {
    return (
        <div className="error">
            <div className="header__main">
                <Header />
                <main>
                    <ErrorPage />
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default Error;
