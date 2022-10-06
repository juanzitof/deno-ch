import { Oak } from "./deps.ts";
import ColorsRouter from './router.ts';

const app = new Oak.Application();

app.use(ColorsRouter.routes());

app.listen({ port: 8081 });