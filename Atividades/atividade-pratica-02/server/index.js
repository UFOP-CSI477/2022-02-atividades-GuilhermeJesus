import express from "express";
import cors from "cors";
import estadosRoutes from "./routes/estados.js";
import cidadesRoutes from "./routes/cidades.js";
import pessoasRoutes from "./routes/pessoas.js";
import locaisRoutes from "./routes/locais.js";
import tiposRoutes from "./routes/tipos.js";
import doacoesRoutes from "./routes/doacoes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", estadosRoutes);
app.use("/", cidadesRoutes);
app.use("/", pessoasRoutes);
app.use("/", doacoesRoutes);
app.use("/", locaisRoutes);
app.use("/", tiposRoutes);

app.listen(8800);