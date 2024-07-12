import MainMenu from "../Parts/MainMenu";
import "./style.scss";

export function Layout(props) {
  return (
    <div id="default-template">
      <div className="view">
        <header>
            <MainMenu />
        </header>
        <main>{props.children}</main>
        <footer>
            <p className="text-center">
                ©Sandro Schutt - 2024
            </p>
        </footer>
      </div>
    </div>
  );
}
