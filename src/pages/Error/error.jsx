import Header from "../../components/Header/header";
import ErrorPage from "../../components/Error/error";
import Footer from "../../components/Footer/footer";

function Error() {
    return (
        <div className="error">
            <div className="header__main">
                <header>
                    <Header />
                </header>
                <main>
                    <ErrorPage />
                </main>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Error;
