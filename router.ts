import { Oak } from "./deps.ts";

const colors: string[] = [];

const router = new Oak.Router();

router.get('/', (ctx) => {
        ctx.response.body = `
          <html>
            <body>
              <form action="/" method="POST">
                <div>
                  <label for="color">Ingrese su color</label>
                  <input type="text" placeholder="Ingrese el nombre" name="color" required>
                  <button type="submit">Enviar</button>
                </div>
              </form>
              <div style="background-color:black">
                <h3 style="color:white">Lista de Colores</h3>
                <ul>
                  ${colors.map((color) => `<li style="color:${color}">${color}</li>`)}
                </ul>
              </div>
            </body>
          </html>
        `
    })
    .post('/', async (ctx) => {
        const data = await ctx.request.body().value;
        const params = new URLSearchParams(data);
        const color = params.get("color");
        colors.push(color);
        ctx.response.redirect('/');
    })

export default router;