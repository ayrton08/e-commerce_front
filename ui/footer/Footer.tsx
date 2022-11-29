import React from "react";
import { Link } from "../Link";
import { ContainerFooter, SectionFooter, TitleFooter } from "./styled";

export const Footer = () => {
  return (
    <ContainerFooter>
      <SectionFooter>
        <TitleFooter>Services</TitleFooter>
        <Link label="Branding" />
        <Link label="Design" />
        <Link label="Marketing" />
        <Link label="Advertisement" />
      </SectionFooter>
      <SectionFooter>
        <TitleFooter>Company</TitleFooter>
        <Link label="About us" />
        <Link label="Contact" />
        <Link label="Jobs" />
        <Link label="Press kit" />
      </SectionFooter>
      <SectionFooter>
        <TitleFooter>Social</TitleFooter>

        <div className="grid grid-flow-col gap-4">
          <a>
            <i className="bx bxl-twitter bx-md"></i>
          </a>
          <a>
            <i className="bx bxl-facebook-circle bx-md"></i>
          </a>
        </div>
      </SectionFooter>
    </ContainerFooter>
  );
};