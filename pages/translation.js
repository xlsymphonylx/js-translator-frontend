import React, { useCallback, useState } from "react";
import {
  Button,
  Container,
  Col,
  Row,
  ButtonGroup,
  Form,
} from "react-bootstrap";
import TranslateArea from "../components/common/TranslateArea";
import Head from "next/head";
import translateService from "../services/translateService";
import { swalError, swalSuccess, swalWarning } from "../utils/alertUtils";

export default function Home() {
  const [codeToTranslate, setCodeToTranslate] = useState("");
  const [saveTitle, setSaveTitle] = useState("");
  const [saveDescription, setSaveDescription] = useState("");
  const [translatedCode, setTranslatedCode] = useState("");
  const [translateMode, setTranslateMode] = useState(false);
  const [saveMode, setSaveMode] = useState(false);

  const resetData = () => {
    setCodeToTranslate("");
    setSaveTitle("");
    setTranslatedCode("");
    setSaveDescription("");
  };

  const translate = async () => {
    try {
      const response = translateMode
        ? await translateService.translatePseudo({
            code: codeToTranslate,
          })
        : await translateService.translateJS({
            code: codeToTranslate,
          });
      const { translatedCode } = response;
      setTranslatedCode(translatedCode);
      await swalSuccess("Traducción exitosa");
    } catch (error) {
      console.log(error);
      swalError("Algo salio mal, revisa bien tus datos");
    }
  };
  const prepareSave = async () => {
    await swalWarning(
      "Debera llenar titulo y descripción, despues debera volver a dar click a guardar"
    );
    setSaveMode(true);
  };
  const saveExercise = async () => {
    try {
      const response = await translateService.saveExercise({
        code: codeToTranslate,
        translatedCode: translatedCode,
        exerciseType: translateMode ? 1 : 2,
        title: saveTitle,
        description: saveDescription,
      });
      setSaveMode(false);
      resetData();
      await swalSuccess("Guardado exitoso");
    } catch (error) {
      console.log(error);
      swalError("Algo salio mal, revisa bien tus datos");
    }
  };
  // const debounceTranslate = useCallback(debounce(translate, 500), [
  //   codeToTranslate,
  // ]);

  return (
    <Container>
      <Head>
        <title>Traductor JS a PSEUDOCODIGO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h3 text-center mt-2">
        {translateMode
          ? "Traducción de Pseudocodigo a JavaScript"
          : "Traducción de JavaScript a Pseudocodigo"}
      </div>
      <div className="text-center my-4">
        <ButtonGroup>
          <Button
            variant="success"
            style={{ fontSize: "1.1rem" }}
            onClick={() => translate()}
          >
            Traducir
          </Button>
          <Button
            variant="success"
            style={{ fontSize: "1.1rem" }}
            onClick={() => {
              setTranslateMode(!translateMode);
              resetData();
            }}
          >
            Cambiar modo
          </Button>
          <Button
            className="text-light"
            variant={saveMode ? "success" : "primary"}
            style={{ fontSize: "1.1rem" }}
            onClick={saveMode ? () => saveExercise() : () => prepareSave()}
          >
            Guardar Codigo
          </Button>
          {saveMode ? (
            <Button
              className="text-light"
              variant="danger"
              style={{ fontSize: "1.1rem" }}
              onClick={() => setSaveMode(false)}
            >
              Cancelar
            </Button>
          ) : null}
        </ButtonGroup>
      </div>
      {saveMode ? (
        <div>
          <div className="form-floating ">
            <input
              className="form-control bg-dark text-light mt-2"
              type="text"
              value={saveTitle}
              onInput={(event) => setSaveTitle(event.target.value)}
            ></input>
            <label className="text-light">Titulo</label>
          </div>
          <div className="form-floating">
            <textarea
              className="form-control bg-dark text-light mt-2"
              value={saveDescription}
              onInput={(event) => setSaveDescription(event.target.value)}
            ></textarea>
            <label className=" text-light">Descripción</label>
          </div>
        </div>
      ) : null}
      <div style={{ textAlign: "center" }}>
        <Row>
          <Col className="p-2">
            <div className="form-floating">
              <TranslateArea
                label={translateMode ? "PseudoCodigo" : "JavaScript"}
                placeholder="Codigo a Traducir"
                code={codeToTranslate}
                setCode={setCodeToTranslate}
              />
            </div>
          </Col>
          <Col className="p-2">
            <div className="form-floating">
              <TranslateArea
                label={translateMode ? "JavaScript" : "PseudoCodigo"}
                placeholder="Traducción de codigo"
                code={translatedCode}
                disabled
              />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
