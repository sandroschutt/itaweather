import "./style.scss";
import axios from "axios";
import { Layout } from "../../template/Layout";
import { DynamicTable } from "../../components/Tables/DynamicTable";
import { useEffect, useState } from "react";
import { Exception } from "sass";

export default function Companies() {
  const rows = [
    "Nome Corporativo",
    "Nome Fantasia",
    "Endereço",
    "Capital (R$)",
  ];
  const [clientsData, setClientsData] = useState("");
  const endpoint = "http://localhost:9000/companies";

  useEffect(() => {
    if (clientsData === "") {
      axios
        .get(endpoint)
        .then((response) => {
          if (response.status !== 200) {
            throw new Exception("Erro na requisição para a rota de clientes.");
          }

          response.data.map((companies) => {
            companies.monetary_capital = companies.monetary_capital.toLocaleString(
              "pt-br",
              { style: "currency", currency: "BRL" }
            );
          });

          setClientsData(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, [clientsData, endpoint]);

  return (
    <Layout>
      <h1 className="mb-4 text-center">Empresas</h1>
      <DynamicTable rows={rows} dataSet={clientsData} />
    </Layout>
  );
}
