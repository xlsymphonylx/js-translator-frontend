import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ButtonGroup, Button, Col, Container, Row } from "react-bootstrap";
import TranslateArea from "../../components/common/TranslateArea";
import translateService from "../../services/translateService";
import { swalDecision, swalError, swalSuccess } from "../../utils/alertUtils";

function ExerciseId() {
  const [exercise, setExercise] = useState({});
  const router = useRouter();
  const { id } = router.query;
  const getExercise = async () => {
    try {
      const { exercise } = await translateService.getExercise(id);
      setExercise(exercise);
    } catch (error) {
      console.log(error);
      swalError("Algo salio mal, revisa bien tus datos");
    }
  };
  const deleteExercise = async () => {
    try {
      await translateService.deleteExercise(id);
      await swalSuccess("Eliminado con exito");
      router.push("/exercises");
    } catch (error) {
      console.log(error);
      swalError("Algo salio mal, revisa bien tus datos");
    }
  };

  const prepareDelete = async () => {
    await swalDecision("Esto eliminara el ejercicio guardado", deleteExercise);
  };

  useEffect(() => {
    if (id) getExercise();
  }, [id]);

  return (
    id && (
      <Container>
        <Head>
          <title>Ejercicio Guardado {exercise.title || ""}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="h3 text-center mt-2">
          Ejercicio Guardado {exercise.title || ""}
        </div>
        <div className="text-center my-4">
          <ButtonGroup>
            <Button
              className="text-light"
              variant="danger"
              onClick={() => prepareDelete()}
              style={{ fontSize: "1.1rem" }}
            >
              Eliminar Ejercicio
            </Button>
            <Button
              className="text-light"
              variant="primary"
              onClick={() => router.push("/exercises")}
              style={{ fontSize: "1.1rem" }}
            >
              Regresar
            </Button>
          </ButtonGroup>
        </div>
        <div>
          <div className="form-floating ">
            <input
              className="form-control bg-dark text-light mt-2"
              type="text"
              value={exercise.title || ""}
              disabled
            ></input>
            <label className="text-light">Titulo</label>
          </div>
          <div className="form-floating">
            <textarea
              className="form-control bg-dark text-light mt-2"
              value={exercise.description || ""}
              disabled
            ></textarea>
            <label className=" text-light">Descripción</label>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <Row>
            <Col className="p-2">
              <div className="form-floating">
                <TranslateArea
                  label={exercise.exerciseType ? "PseudoCodigo" : "JavaScript"}
                  placeholder="Codigo a Traducir"
                  code={exercise.code || ""}
                  disabled
                />
              </div>
            </Col>
            <Col className="p-2">
              <div className="form-floating">
                <TranslateArea
                  label={exercise.exerciseType ? "JavaScript" : "PseudoCodigo"}
                  placeholder="Traducción de codigo"
                  code={exercise.translation || ""}
                  disabled
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    )
  );
}

export default ExerciseId;
