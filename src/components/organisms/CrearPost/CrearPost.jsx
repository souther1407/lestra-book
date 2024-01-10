import React, { useState } from "react";
import Avatar from "../../atoms/Avatar/Avatar";
import Icon from "../../atoms/Icon/Icon";
import Text from "../../atoms/Text/Text";
import TextArea from "../../atoms/TextArea/TextArea";
import styles from "./crearPost.module.css";
import Modal from "../../molecules/Modal/Modal";

const CrearPost = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.contenedor}>
      <div className={styles.contenedorGeneral}>
        <Avatar
          src={
            "https://imgs.search.brave.com/VJdZ7LwDiZiFQeFoniOSwUEsz5OkKwAZG38N2G3Uq_Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cGF0aHNvY2lhbC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDUvYXZ0YXIt/aW1nMi1uZXctMS5q/cGVn"
          }
        ></Avatar>
        <div className={styles.textArea}>
          <TextArea
            onClick={() => setShowModal(true)}
            className={styles.areaPost}
            cols="30"
            rows="2"
            placeholder="¿En que estas Pensando,Ignacia?"
          ></TextArea>
        </div>

        <Modal
          show={showModal}
          onClose={() => setShowModal(false)}
          title="Crear Publicación"
        >
          <div>
            <div className={styles.perfil}>
              <Avatar
                src={
                  "https://imgs.search.brave.com/VJdZ7LwDiZiFQeFoniOSwUEsz5OkKwAZG38N2G3Uq_Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cGF0aHNvY2lhbC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDUvYXZ0YXIt/aW1nMi1uZXctMS5q/cGVn"
                }
              ></Avatar>
              <div className={styles.contenedorTexto}>
                <Text>Ignacia Lestrada</Text>
                <Text size="sm">amigos</Text>
              </div>
            </div>
            <div className={styles.areaTexto}>
              <TextArea placeholder="¿En que estas Pensando,Ignacia?"></TextArea>
            </div>
            <div>
              <Text>Agrega a tu publicación</Text>
              <Icon type="image" color="#58C472"></Icon>
              <Icon type="image" color="#58C472"></Icon>
              <Icon type="smile" color="#58C472"></Icon>
              <Icon type="image" color="#58C472"></Icon>
              
            </div>
          </div>
        </Modal>
      </div>
      <hr />
      <div className={styles.contenedorConjuntoGeneral}>
        <div className={styles.contenedorConjunto}>
          <Icon type="camera" color="var(--primary)" size="xxlg"></Icon>
          <Text>Video en vivo</Text>
        </div>
        <div className={styles.contenedorConjunto}>
          <Icon type="image" color="#58C472" size="xxlg"></Icon>
          <Text>Foto/video</Text>
        </div>
        <div className={styles.contenedorConjunto}>
          <Icon type="smile" color="#F8C03E" size="xxlg"></Icon>
          <Text>Sentimiento/actividad</Text>
        </div>
      </div>
    </div>
  );
};

export default CrearPost;
