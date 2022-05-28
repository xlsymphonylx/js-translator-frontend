import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Container, Row } from "react-bootstrap";
import ExerciseCard from "../../components/common/ExerciseCard";
import translateService from "../../services/translateService";
import { swalError } from "../../utils/alertUtils";

export default function Exercises() {
  const [exercises, setExercises] = useState([]);
  const router = useRouter();

  const getUserExercises = async () => {
    try {
      const { exercises } = await translateService.getUserExercises();
      setExercises(exercises);
    } catch (error) {
      console.log(error);
      swalError("Algo salio mal, revisa bien tus datos");
    }
  };
  useEffect(() => {
    getUserExercises();
  }, []);

  return (
    <Container>
      <Head>
        <title>Ejercicios Guardados</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h3 text-center mt-2">Ejercicios Guardados</div>
      <div style={{ textAlign: "center" }}>
        {exercises.map((exercise) => (
          <Row key={exercise.id} className="mt-2">
            <ExerciseCard
              onClick={() => router.push(`/exercises/${exercise.id}`)}
              exerciseType={exercise.exerciseType}
              title={exercise.title}
              description={exercise.description}
            />
          </Row>
        ))}
      </div>
    </Container>
  );
}
