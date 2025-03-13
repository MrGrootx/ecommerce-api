import "dotenv/config";
let CFG: { Server?: CFGProps } = {};

interface CFGProps {
  port: number | string;
  database: string | undefined;
  jwt_secret: string;
}

CFG.Server = {
  port: process.env.PORT || 4000,
  database: process.env.MONGODB,
  jwt_secret: process.env.JWT_SECRET || "secret",
};

export default CFG;
