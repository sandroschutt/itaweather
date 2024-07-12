import "./style.scss";
import axios from "axios";
import { Layout } from "../../template/Layout";
import { DynamicTable } from "../../components/Tables/DynamicTable";
import { useEffect, useState } from "react";
import { Exception } from "sass";

export default function Clients() {
  const rows = ["Nome", "Nascimento", "CPF", "Endereço", "Status"];
  const [clientsData, setClientsData] = useState("");
  const endpoint = "http://localhost:9000/clients";

  useEffect(() => {
    if (clientsData === "") {
        axios.get(endpoint)
        .then((response) => {
            if(response.status !== 200) {
                throw new Exception("Erro na requisição para a rota de clientes.");
            }

            setClientsData(response.data);
        })
        .catch((error) => console.log(error))
    }
  }, [clientsData, endpoint]);

  return (
    <Layout>
      <h1 className="mb-4 text-center">Clientes</h1>
      <DynamicTable rows={rows} dataSet={clientsData}/>
    </Layout>
  );
}
