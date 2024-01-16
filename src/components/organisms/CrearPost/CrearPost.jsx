import React, { useState } from "react";
import Avatar from "../../atoms/Avatar/Avatar";
import Icon from "../../atoms/Icon/Icon";
import Text from "../../atoms/Text/Text";
import TextButton from "../../molecules/TextButton/TextButton";
import TextArea from "../../atoms/TextArea/TextArea";
import styles from "./crearPost.module.css";
import Modal from "../../molecules/Modal/Modal";
import { addPost } from "../../../services/firestore/firestore.js";
import { useUserStore } from "../../../stores/useUserStore.js";
import LoadingScreen from "../../molecules/LoadingScreen/LoadingScreen.jsx";
const CrearPost = () => {
  const [showModal, setShowModal] = useState(false);
  const credentials = useUserStore((state) => state.credentials);
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({
    msg: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };
  const handleChange = (value) => {
    setPost((prev) => ({ ...prev, msg: value }));
  };
  const handleSendPost = async () => {
    try {
      setLoading(true);
      const newPosts = await addPost({
        content: post.msg,
        authorName: credentials.displayName,
        avatar: credentials.photoURL,
        authorUid: credentials.uid,
      });
      alert("Post creado!");
      handleChange("");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={styles.contenedor}>
      {loading && <LoadingScreen />}
      <div className={styles.contenedorGeneral}>
        <Avatar
          src={
            credentials?.photoURL ||
            "https://imgs.search.brave.com/VJdZ7LwDiZiFQeFoniOSwUEsz5OkKwAZG38N2G3Uq_Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cGF0aHNvY2lhbC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDUvYXZ0YXIt/aW1nMi1uZXctMS5q/cGVn"
          }
        ></Avatar>
        <div className={styles.textArea}>
          <TextArea
            onClick={() => setShowModal(true)}
            className={styles.areaPost}
            cols="30"
            rows="2"
            placeholder={"¿En que estas Pensando," + credentials?.displayName}
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
                  credentials?.photoURL ||
                  "https://imgs.search.brave.com/VJdZ7LwDiZiFQeFoniOSwUEsz5OkKwAZG38N2G3Uq_Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cGF0aHNvY2lhbC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDUvYXZ0YXIt/aW1nMi1uZXctMS5q/cGVn"
                }
              ></Avatar>
              <div className={styles.contenedorTexto}>
                {credentials?.displayName}
                <Text size="sm">amigos</Text>
              </div>
            </div>
            <div className={styles.areaTexto}>
              <div>
                <TextArea
                  value={post.msg}
                  placeholder={
                    "¿En que estas Pensando," + credentials?.displayName
                  }
                  onChange={(e) => handleChange(e.target.value)}
                ></TextArea>
              </div>

              {selectedImage && (
                <div className={styles.imagenCargada}>
                  <img
                    src={selectedImage}
                    alt="Imagen Cargada"
                    style={{ maxWidth: "100%" }}
                  />
                </div>
              )}
            </div>
            <div className={styles.contenedorOpcionesGeneral}>
              <div className={styles.contenedorOpciones}>
                <div>
                  <Text>Agrega a tu publicación</Text>
                </div>
                <div className={styles.icono}>
                  <label htmlFor="subir-imagen">
                    <Icon type="image" color="#58C472" size="xlg"></Icon>
                    <input
                      type="file"
                      accept=".jpg,.png,.jpeg"
                      className={styles.input}
                      id="subir-imagen"
                      onChange={handleImageChange}
                    />
                  </label>
                </div>
                <div className={styles.icono}>
                  <Icon type="person" color="#3085F3" size="xlg"></Icon>
                </div>
                <div className={styles.icono}>
                  <Icon type="smile" color="#F8C03E" size="xlg"></Icon>
                </div>
                <div className={styles.icono}>
                  <Icon type="location" color="#F66551" size="xlg"></Icon>
                </div>
                <div className={styles.icono}>
                  <Icon type="gif" color="#40C2B0" size="xlg"></Icon>
                </div>
                <div className={styles.icono}>
                  <Icon type="dots" color="black" size="xlg"></Icon>
                </div>
              </div>
              <div className={styles.boton}>
                <TextButton onClick={handleSendPost}>Publicar</TextButton>
              </div>
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
