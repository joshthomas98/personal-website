import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import SocialMediaIcons from "./SocialMediaIcons";

export default function App() {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        <MDBRow className="justify-content-between align-items-center">
          <MDBCol md="4">
            <p className="pt-3">
              <i className="bi-telephone-fill"></i> 07902 598774
            </p>
          </MDBCol>
          <MDBCol md="4">
            <SocialMediaIcons />
          </MDBCol>
          <MDBCol md="4">
            <p className="pt-3">
              <i className="bi bi-envelope"></i> joshua.thomas98@hotmail.co.uk
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="text-center pb-4">
        © 2023 Copyright {""}
        <a href="https://pacificfitness.co.uk/">Josh Thomas</a>
      </div>
    </MDBFooter>
  );
}
