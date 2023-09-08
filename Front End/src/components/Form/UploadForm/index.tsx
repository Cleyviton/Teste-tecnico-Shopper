import { FormEvent, useContext, useState } from "react";
import { GoFileDirectoryFill } from "react-icons/go";
import { toast } from "react-toastify";

import { StyledForm } from "./styles";
import { ProductContext } from "../../../Context/ProductContext";

export const UploadForm = () => {
    const {
        fileIsValided,
        setFileIsValided,
        handleValidateCSV,
        handleUpdateCSV,
    } = useContext(ProductContext);
    const [textLabel, setTextLabel] = useState<string>(
        "Selecione um arquivo .csv"
    );
    const [file, setFile] = useState<File | null>(null);

    const onValidate = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (file?.type == "text/csv") {
            const formData = new FormData();
            formData.append("uploadFile", file);
            handleValidateCSV(formData);
        } else {
            toast.error(
                "Por favor, carregue um arquivo válido com a extensão (.csv)",
                {
                    autoClose: 2000,
                }
            );
        }
    };

    const onUpdate = () => {
        const formData = new FormData();
        formData.append("uploadFile", file!);
        handleUpdateCSV(formData);
    };

    return (
        <StyledForm onSubmit={onValidate} encType="multipart/form-data">
            <h1>Atualizar preços</h1>
            <p>
                Carregue um arquivo com a extensão (.csv) para atualização dos
                preços:
            </p>
            <div className="container-input">
                <input
                    type="file"
                    id="file"
                    onChange={(e) => {
                        setTextLabel(e.target.files![0].name);
                        setFileIsValided(false);
                        setFile(e.target.files![0]);
                    }}
                />
                <label htmlFor="file">
                    <span>{textLabel}</span>
                    <GoFileDirectoryFill className="directory-icon" />
                </label>
            </div>

            <div className="container-buttons">
                <button>Validar</button>
                <button
                    type="button"
                    disabled={fileIsValided ? false : true}
                    className={
                        fileIsValided
                            ? "btn-atualizar"
                            : "btn-atualizar disabled"
                    }
                    onClick={onUpdate}
                >
                    Atualizar
                </button>
            </div>
        </StyledForm>
    );
};
