import http from "http";
import express from "express";
import { use, initialize } from "@oas-tools/core";
import { SLARateLimit } from "@oas-tools/sla-rate-limit";


const deploy = async () => {
    const serverPort = 8080;
    const app = express();
    app.use(express.json({limit: '50mb'}));
    
    const config = {
        middleware: {
            security: {
                auth: {
                }
            }
        }
    }

    use(SLARateLimit, {
        slaFile: "api/team-api-plans.yaml",
        scheme: "BearerAuth"
    }, 2);
    use((req,res,next)=>{
        res.setHeader("Content-Type","application/json");
        next();
    },{}, 0);
    initialize(app, config).then(() => {
        http.createServer(app).listen(serverPort, () => {
        console.log("\nApp running at http://localhost:" + serverPort);
        console.log("________________________________________________________________");
        if (config.middleware.swagger?.disable !== false) {
            console.log('API docs (Swagger UI) available on http://localhost:' + serverPort + '/docs');
            console.log("________________________________________________________________");
        }
        });
    });
    
}

const undeploy = () => {
  process.exit();
};

export default {deploy, undeploy}

