import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import TranslateAreas from "../components/common/TranslateAreas";
import Head from "next/head";
import translateService from "../services/translateService";
import { swalError, swalSuccess } from "../utils/alertUtils";

export default function Home() {
  const [JSText, setJS] = useState("");
  const [translatedCode, setTranslatedCode] = useState("");

  const translate = async () => {
    try {
      const response = await translateService.translate({
        code: JSText,
      });
      const { translatedCode } = response;
      console.log(translatedCode);
      setTranslatedCode(translatedCode);
      await swalSuccess("Traducción exitosa");
    } catch (error) {
      console.log(error);
      swalError("Algo salio mal, revisa bien tus datos");
    }
  };

  return (
    <Container>
      <Head>
        <title>Traductor JS a PSEUDOCODIGO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TranslateAreas JS={JSText} setJS={setJS} pseudo={translatedCode} />
      <div style={{ textAlign: "center" }} className="mt-4">
        <Button
          variant="success"
          style={{ fontSize: "1.4rem" }}
          onClick={() => translate()}
        >
          Traducir
        </Button>
      </div>
    </Container>
  );
}
