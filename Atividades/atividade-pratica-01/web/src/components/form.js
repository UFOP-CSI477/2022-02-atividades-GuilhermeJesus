import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #f3f3f3;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const cad = ref.current;

      cad.estado = onEdit.estado;
      cad.pessoa = onEdit.pessoa;
      cad.cidade = onEdit.cidade;
      cad.local = onEdit.local;
      cad.tipoS = onEdit.tipoS;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cad = ref.current;


    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit.id, {
            estado: cad.estado.value,
            pessoa: cad.pessoa.value,
            cidade: cad.cidade.value,
            local: cad.local.value,
            tipoS: cad.tipoS.value
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800", {
            estado: cad.estado.value,
            pessoa: cad.pessoa.value,
            cidade: cad.cidade.value,
            local: cad.local.value,
            tipoS: cad.tipoS.value
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    cad.estado.value = "";
    cad.pessoa.value = "";
    cad.cidade.value = "";
    cad.local.value = "";
    cad.tipoS.value = "";

    setOnEdit(null);
    getUsers();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Estado</Label>
        <Input estado="estado" />
      </InputArea>
      <InputArea>
        <Label>Cidade</Label>
        <Input cidade="cidade"/>
      </InputArea>
      <InputArea>
        <Label>Nome</Label>
        <Input pessoa="pessoa"/>
      </InputArea>
      <InputArea>
        <Label>Local</Label>
        <Input local="local"/>
      </InputArea>
      <InputArea>
        <Label>Tipo S</Label>
        <Input tipoS="tipoS"/>
      </InputArea>
      

      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form;