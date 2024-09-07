import { Navbar } from "@/components/container";
import { FC, PropsWithChildren, ReactElement } from "react";

const LandingTemplate: FC<Readonly<PropsWithChildren>> = ({
  children,
}): ReactElement => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default LandingTemplate;
