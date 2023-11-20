import { logoUniveral } from "assets/images/logo";
import { styles } from "styles";

const LoadingPage = () => {
  return (
    <>
      <main className="relative grid h-screen place-items-center">
        <h1 className={`${styles.headingL} text-primary-40`}>Loading...</h1>
        <img
          src={`${logoUniveral}`}
          alt="logo"
          className="absolute z-[-1] opacity-[15%]"
        />
      </main>
    </>
  );
};

export default LoadingPage;
